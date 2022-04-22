import { snackbarSetting } from "modules/common/Elements";
import { OptionsObject, SnackbarMessage, useSnackbar } from "notistack";

export interface ToastPrams {
  message: SnackbarMessage;
  option?: OptionsObject;
}

export const useToast = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showNoti =
    (variant: "success" | "info" | "warning" | "error") =>
    (params: ToastPrams) =>
      enqueueSnackbar(
        params.message,
        snackbarSetting((key) => closeSnackbar(key), { color: variant })
      );

  return {
    success: showNoti("success"),
    error: showNoti("error"),
    warning: showNoti("warning"),
    info: showNoti("info"),
  } as const;
};
