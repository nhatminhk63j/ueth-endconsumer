import { Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { BLACK, PRIMARY, WHITE } from "assets/theme/colors";
import { LAST_FORGOT_PASSWORD_INFO } from "constants/constants";
import { snackbarSetting } from "modules/common/Elements";
import { sendForgotPasswordOTP } from "modules/system/systemAction";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import LoadingButton from "../LoadingButton";
import { FormattedMessage, useIntl } from "react-intl";

const useStyles = makeStyles((theme) => ({
  container: {
    color: BLACK,
    fontSize: 14,
    paddingTop: 16,
  },
  iconPhone: {
    fill: PRIMARY,
  },
  otpHaveValue: {},
  containerStyle: {
    width: "100%",
  },
  inputStyle: {
    textAlign: "center",
    borderRadius: "50%",
    position: "relative",
    border: `1px solid ${PRIMARY}`,
    backgroundColor: WHITE,
    fontSize: 24,
    width: "50px !important",
    height: 50,
    padding: 0,
    margin: "0 4px",
    lineHeight: 29,
    fontWeight: 600,
    color: PRIMARY,
    "&:focus": {
      outline: "none",
    },
  },
}));

let timeInterval: any = null;
let countDownTemp = 120;

const ForgotPasswordOtp = ({ handleChangeStep = (val: number) => {} }) => {
  const classes = useStyles();
  const [lastRegisterInfo, setLastRegisterInfo] = useState<some>({});
  const [countDown, setCountDown] = useState(120);
  const [otp, setOtp] = useState("");
  const [, setLoading] = useState(false);
  const intl = useIntl();

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  useEffect(() => {
    const lastRegisterInfo: some = JSON.parse(
      localStorage.getItem(LAST_FORGOT_PASSWORD_INFO) || "{}"
    );
    setLastRegisterInfo(lastRegisterInfo);
    genCountDown();
    countDownTemp = 120;
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  const genCountDown = () => {
    timeInterval = setInterval(() => {
      if (countDownTemp === 0) {
        countDownTemp = 120;
        clearInterval(timeInterval);
      } else {
        countDownTemp = countDownTemp - 1;
        setCountDown(countDownTemp);
      }
    }, 1000);
  };

  const handleSubmitOtp = () => {
    if (otp.length === 6) {
      const values = {
        ...lastRegisterInfo,
        otp: otp,
      };
      localStorage.setItem(LAST_FORGOT_PASSWORD_INFO, JSON.stringify(values));
      handleChangeStep(3);
    } else {
      enqueueSnackbar(
        intl.formatMessage({ id: "IDS_PASSWORD_RECOVERY_OTP_INPUT" }),
        snackbarSetting((key) => closeSnackbar(key), {
          color: "error",
        })
      );
    }
  };

  const reSendOtp = async () => {
    setLoading(true);
    try {
      const dataDto = {
        account: lastRegisterInfo?.account,
        configCode: "MYTOUR",
      };
      const res: any = await sendForgotPasswordOTP(dataDto);
      if (res?.code === 200) {
        countDownTemp = 120;
        genCountDown();
        enqueueSnackbar(
          res?.message,
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
  };

  const handleChange = (otp) => {
    setOtp(otp);
  };

  return (
    <Box className={classes.container}>
      <Box display="flex" flexDirection="column" alignItems="center" pb={3}>
        <Box component="span" lineHeight="17px">
          <FormattedMessage id="IDS_PASSWORD_RECOVERY_LABEL_2" />
        </Box>
        <Box component="span" lineHeight="21px" fontSize={18} pt={6 / 8}>
          {lastRegisterInfo.phone}
        </Box>
      </Box>
      <Box pb={28 / 8} mx={-12 / 8} display="flex" justifyContent="center">
        <OtpInput
          onChange={handleChange}
          numInputs={6}
          value={otp}
          shouldAutoFocus
          isInputNum
          inputStyle={classes.inputStyle}
          containerStyle={classes.containerStyle}
        />
      </Box>
      <LoadingButton
        color="primary"
        variant="contained"
        disableElevation
        style={{
          borderRadius: 8,
          padding: "10px 40px",
          width: "100%",
          height: 44,
        }}
        onClick={handleSubmitOtp}
      >
        <Typography variant="subtitle2">
          <FormattedMessage id="IDS_FRESH_CONTINUE" />
        </Typography>
      </LoadingButton>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        lineHeight="17px"
        pt={3}
      >
        <Button
          color={countDown !== 0 ? "default" : "primary"}
          style={{ padding: "8px 4px", height: 17, borderRadius: 8 }}
          onClick={() => {
            if (countDown === 0) {
              reSendOtp();
            }
          }}
          disableFocusRipple={countDown !== 0}
        >
          <Typography variant="subtitle2">
            <FormattedMessage id="IDS_FRESH_RESEND_OTP" />
          </Typography>
        </Button>
        {countDown !== 0 && (
          <Box
            style={{ height: 18 }}
            color="primary.main"
          >{`${countDown}s`}</Box>
        )}
      </Box>
    </Box>
  );
};

export default ForgotPasswordOtp;
