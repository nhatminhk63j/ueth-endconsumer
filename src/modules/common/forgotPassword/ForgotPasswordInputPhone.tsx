import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BLACK, PRIMARY } from "assets/theme/colors";
import { LAST_FORGOT_PASSWORD_INFO } from "constants/constants";
import { Form, Formik } from "formik";
import { sendForgotPasswordOTP } from "modules/system/systemAction";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import * as yup from "yup";
import { snackbarSetting } from "../Elements";
import FieldTextContent from "../FieldTextContent";
import LoadingButton from "../LoadingButton";

const useStyles = makeStyles((theme) => ({
  container: {
    color: BLACK,
    fontSize: 14,
  },
  iconPhone: {
    fill: PRIMARY,
  },
}));

const ForgotPasswordInputPhone = ({
  handleChangeStep = (val: number) => {},
}) => {
  const classes = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [, setLoading] = useState(false);
  const intl = useIntl();
  const storeSchema = yup.object().shape({
    account: yup
      .string()
      .trim()
      .required(
        intl.formatMessage({ id: "IDS_PASSWORD_RECOVERY_NOT_INPUT_USER" })
      ),
  });

  return (
    <Box className={classes.container}>
      <Formik
        initialValues={{
          account: "",
        }}
        onSubmit={async (values) => {
          setLoading(true);
          const dataDTO = {
            ...values,
            configCode: "MYTOUR",
          };
          try {
            const res: any = await sendForgotPasswordOTP(dataDTO);
            if (res.code === 200) {
              localStorage.setItem(
                LAST_FORGOT_PASSWORD_INFO,
                JSON.stringify({ account: dataDTO.account })
              );
              handleChangeStep(2);
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
            <Form>
              <Box pt={2}>
                <Box fontSize={14} lineHeight="22px" pb={12 / 8}>
                  <FormattedMessage id="IDS_PASSWORD_RECOVERY_LABEL_1" />
                </Box>
                <FieldTextContent
                  name="account"
                  optional
                  placeholder="Nhập Email/SĐT"
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
                />
                <LoadingButton
                  color="primary"
                  variant="contained"
                  disableElevation
                  style={{
                    borderRadius: 8,
                    padding: "10px 40px",
                    width: "100%",
                  }}
                  type="submit"
                >
                  <Typography variant="subtitle2">
                    <FormattedMessage id="IDS_FRESH_CONTINUE" />
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

export default ForgotPasswordInputPhone;
