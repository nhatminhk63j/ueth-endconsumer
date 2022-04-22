import { Backdrop, Box, Dialog, Fade, IconButton, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BackIconBlack, CloseIcon } from 'assets/icons';
import { WHITE } from 'assets/theme/colors';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import ForgotPasswordInputPhone from './forgotPassword/ForgotPasswordInputPhone';
import ForgotPasswordOtp from './forgotPassword/ForgotPasswordOtp';
import ForgotPasswordInputPass from './forgotPassword/ForgotPasswordInputPass';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: WHITE,
    boxShadow: theme.shadows[5],
    width: 408,
    borderRadius: 8,
    padding: "32px 48px",
    outline: "none",
  },
  boxIconClose: {
    position: "absolute",
    right: 4,
    top: 4,
  },
  boxIconBack: {
    position: "absolute",
    left: 4,
    top: 4,
  },
}));

const ForgotPasswordModal = ({
  open = false,
  close = () => { },
  handleSelectItem = (val: string) => { },
  phoneNumberInit = "", }) => {
  const classes = useStyles();
  const [step, setStep] = useState(1);
  const handleChangeStep = (valueStep = 1) => {
    setStep(valueStep);
    if (valueStep === 4) {
      close();
    }
  };
  const handleCloseModal = () => {
    setStep(1);
    close();
  };
  useEffect(() => {
    setStep(1);
  }, []);
  return (
    <Dialog open={open}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        disableBackdropClick
      >
        <Fade in={open}>
          <Box className={classes.paper}>
            <Box className={classes.boxIconBack}>
              {step !== 1 && (
                <IconButton onClick={() => handleChangeStep(step - 1)}>
                  <BackIconBlack />
                </IconButton>
              )}
            </Box>
            <Box className={classes.boxIconClose}>
              <IconButton onClick={handleCloseModal}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Box
              component="span"
              fontWeight={600}
              fontSize={22}
              lineHeight="22px"
            >
              <FormattedMessage id="IDS_PASSWORD_RECOVERY" />
            </Box>

            {step === 1 ? (
              <ForgotPasswordInputPhone
              handleChangeStep={handleChangeStep} 
              />
            ) : step === 2 ? (
              <ForgotPasswordOtp
              handleChangeStep={handleChangeStep} 
              />
            ) : (
              <ForgotPasswordInputPass
              handleChangeStep={handleChangeStep} 
              />
            )}
          </Box>
        </Fade>
      </Modal>
    </Dialog>

  )
}

export default ForgotPasswordModal
