import { useSnackbar } from 'notistack';
import { snackbarSetting } from 'modules/common/Elements';

const useShowNotify = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const showNotifySnack = (message: string, type?: 'success' | 'error') => {
    enqueueSnackbar(
      message,
      snackbarSetting((key) => closeSnackbar(key), {
        color: type || 'error',
      })
    );
  };
  return showNotifySnack;
};

export default useShowNotify;
