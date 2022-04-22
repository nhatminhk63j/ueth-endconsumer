import React from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { useSnackbar } from "notistack";
import { makeStyles } from "@material-ui/styles";
import { Box, InputAdornment, IconButton, Typography } from "@material-ui/core";
import { BLACK, PRIMARY } from "assets/theme/colors";
import { useDispatch } from "react-redux";
import { Action } from "redux";
import { AppState } from "modules/rootReducer";
import { ThunkDispatch } from "redux-thunk";
import {
  forgotPasswordV2,
  actionUpdateLoginTempAccount,
} from "modules/system/systemAction";
import { snackbarSetting } from "modules/common/Elements";
import FieldTextContent from "../FieldTextContent";
import { IconVisibility, IconVisibilityOff } from "assets/icons";
import LoadingButton from "../LoadingButton";
import { useState } from "react";
import { LAST_FORGOT_PASSWORD_INFO } from "constants/constants";
import { FormattedMessage, useIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
  container: {
    color: BLACK,
    fontSize: 14,
  },
  iconPhone: {
    fill: PRIMARY,
  },
}));

const ForgotPasswordInputPass = ({
  handleChangeStep = (val: number) => {},
}) => {
  const classes = useStyles();
  const dispatch = useDispatch<ThunkDispatch<AppState, null, Action<string>>>();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const intl = useIntl();

  const storeSchema = yup.object().shape({
    password: yup
      .string()
      .trim()
      .required(intl.formatMessage({ id: "IDS_PASSWORD_RECOVERY_INPUT" }))
      .min(6, intl.formatMessage({ id: "IDS_PASSWORD_RECOVERY_VALIDATE" }))
      .max(20, intl.formatMessage({ id: "IDS_PASSWORD_RECOVERY_VALIDATE" })),
    rePassword: yup
      .string()
      .trim()
      .required(intl.formatMessage({ id: "IDS_PASSWORD_RECOVERY_RE_INPUT" }))
      .oneOf(
        [yup.ref("password"), null],
        intl.formatMessage({ id: "IDS_PASSWORD_RECOVERY_NOT_CORRECT" })
      )
      .min(6, intl.formatMessage({ id: "IDS_PASSWORD_RECOVERY_VALIDATE" }))
      .max(20, intl.formatMessage({ id: "IDS_PASSWORD_RECOVERY_VALIDATE" })),
  });
  return (
    <Box className={classes.container}>
      <Formik
        initialValues={{
          password: "",
          rePassword: "",
          showPassword: false,
          showRePassword: false,
        }}
        onSubmit={async (values) => {
          setLoading(true);
          const lastRegisterInfo =
            JSON.parse(
              localStorage.getItem(LAST_FORGOT_PASSWORD_INFO) || "{}"
            ) || {};
          const dataDTO = {
            ...values,
            ...lastRegisterInfo,
          };
          delete dataDTO.rePassword;
          delete dataDTO.showPassword;
          delete dataDTO.showRePassword;
          try {
            const res: any = await forgotPasswordV2(dataDTO);
            if (res.code === 200) {
              dispatch(
                actionUpdateLoginTempAccount({ ...dataDTO, otp: undefined })
              );
              localStorage.removeItem("LAST_FORGOT_PASSWORD_INFO");
              handleChangeStep(4);
              res?.message &&
                enqueueSnackbar(
                  intl.formatMessage({ id: "IDS_PASSWORD_RECOVERY_SUCCESS" }),
                  snackbarSetting((key) => closeSnackbar(key), {
                    color: "success",
                  })
                );
            } else {
              res?.message &&
                enqueueSnackbar(
                  res?.message,
                  snackbarSetting((key) => closeSnackbar(key), {
                    color: "error",
                  })
                );
            }
          } catch (error) {
            setLoading(false);
          }
          setLoading(false);
        }}
        validationSchema={storeSchema}
      >
        {({ values, setFieldValue }) => {
          return (
            <Form autoComplete="off">
              <Box pt={2}>
                <FieldTextContent
                  name="password"
                  type={values.showPassword ? "text" : "password"}
                  optional
                  placeholder={intl.formatMessage({ id: "IDS_FRESH_PASSWORD" })}
                  inputStyle={{
                    border: "none",
                    height: 44,
                    backgroundColor: "#EDF2F7",
                    borderRadius: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                  }}
                  inputProps={{
                    autoComplete: "off",
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          setFieldValue("showPassword", !values.showPassword);
                        }}
                      >
                        {values.showPassword ? (
                          <IconVisibility />
                        ) : (
                          <IconVisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FieldTextContent
                  name="rePassword"
                  optional
                  placeholder={intl.formatMessage({
                    id: "IDS_PASSWORD_RECOVERY_RE_INPUT",
                  })}
                  type={values.showRePassword ? "text" : "password"}
                  inputStyle={{
                    border: "none",
                    height: 44,
                    backgroundColor: "#EDF2F7",
                    borderRadius: 8,
                    paddingLeft: 16,
                    paddingRight: 16,
                  }}
                  inputProps={{
                    autoComplete: "off",
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {
                          setFieldValue(
                            "showRePassword",
                            !values.showRePassword
                          );
                        }}
                      >
                        {values.showRePassword ? (
                          <IconVisibility />
                        ) : (
                          <IconVisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />

                <LoadingButton
                  color="primary"
                  variant="contained"
                  type="submit"
                  disableElevation
                  style={{
                    padding: "10px 40px",
                    borderRadius: 8,
                    width: "100%",
                  }}
                  loading={loading}
                >
                  <Typography variant="subtitle2">
                    <FormattedMessage id="IDS_FINISH" />
                  </Typography>
                </LoadingButton>
              </Box>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default ForgotPasswordInputPass;
