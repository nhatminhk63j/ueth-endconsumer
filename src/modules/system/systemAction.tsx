import * as actions from "constants/actions";
import { TOKEN, REFRESH_TOKEN, SUCCESS_CODE } from "constants/constants";
import { firebaseUnregister } from "../../firebase/Firebase";
import api from "utils/helpers/api";
import { configs } from "utils/helpers/config";

export const actionChangeLanguage = (lang: string) => {
  return {
    type: actions.CHANGE_LANGUAGE,
    payload: lang,
  };
};
export const actionShowLoading = () => ({ type: actions.SHOW_LOADING });
export const actionHideLoading = () => ({ type: actions.HIDE_LOADING });
export const actionUpdateLoginTempAccount = (data: some) => {
  return {
    type: actions.SET_LOGIN_TEMP_ACCOUNT,
    payload: data,
  };
};
export const actionUpdateProfile = (data: some) => ({
  type: actions.UPDATE_PROFILE,
  payload: data,
});
export const actionLogin = (data: some) => {
  return api({
    method: "post",
    url: "/auth/v2/login",
    data,
    baseURL: configs().GATE_URl,
  });
};
export const actionLoginOauth = (data: some) => {
  return api({
    method: "post",
    url: "/auth/v2/oauth",
    data,
    baseURL: configs().GATE_URl,
  });
};
export const actionValidateToken = () => {
  return api({
    method: "get",
    url: "/account/validateAccessToken",
    baseURL: configs().GATE_URl,
  });
};
export const actionGetProfile = () => async (dispatch: any) => {
  try {
    const res: some = await api({
      method: "get",
      url: "/ams/account/simple-info",
      baseURL: configs().GATE_URl,
    });
    if (res?.code === SUCCESS_CODE) {
      dispatch(actionUpdateProfile(res?.data));
    }
  } catch (error) {}
};
export const actionRoleAccount = () => async (dispatch: any) => {
  try {
    const res: some = await api({
      method: "get",
      url: "/ams/account/roles?zone=UET-HACKATHON",
      baseURL: configs().GATE_URl,
    });
    if (res?.code === SUCCESS_CODE) {
      dispatch({ type: actions.UPDATE_ROLE, payload: res?.data?.items });
    }
  } catch (error) {}
};
export const getChainStore = () => {
  return api({
    method: "get",
    url: "/fresh-merchant/chain-store",
    baseURL: configs().GATE_URl,
  });
};
export const updateChainStore = (chains: some[]) => ({
  type: actions.UPDATE_CHAIN,
  payload: chains,
});

export const getRefreshToken = (refreshToken: string) => {
  return api({
    method: "get",
    url: "/auth/v2/refresh-token",
    params: { refreshToken },
    baseURL: configs().GATE_URl,
  });
};
export const requestLogout = async () => {
  try {
    await firebaseUnregister();
    await api({
      method: "delete",
      url: "/auth/v2/logout",
      data: {},
      baseURL: configs().GATE_URl,
    });
  } catch (error) {
  } finally {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);
    window.location.href = "/login";
  }
};
export const requestOTP = (params: some) => {
  return api({
    method: "get",
    url: "/ams/account/v2/send-signup-otp",
    params,
    noAuthentication: true,
    headers: { config: "MYTOUR" },
    baseURL: configs().GATE_URl,
  } as any);
};

export const actionGetProvinces = (params: some) => {
  return api({
    method: "get",
    url: "/hms-premium/info/location/provinces",
    baseURL: configs().GATE_URl,
    params,
  });
};
export const actionGetDistricts = (params: some) => {
  return api({
    method: "get",
    url: "/hms-premium/info/location/districts",
    params,
    baseURL: configs().GATE_URl,
  });
};
export const actionGetStreets = (params: some) => {
  return api({
    method: "get",
    url: "/hms-premium/info/location/streets",
    params,
    baseURL: configs().GATE_URl,
  });
};
export const actionGetBanks = () => {
  return api({
    method: "get",
    url: "/hms-premium/info/banks",
    baseURL: configs().GATE_URl,
  });
};
export const actionGetBankBranches = (params: some) => {
  return api({
    method: "get",
    url: "/hms-premium/info/banks/branches",
    params,
    baseURL: configs().GATE_URl,
  });
};

export const verifyOTP = (params: some) => {
  return api({
    method: "get",
    url: "/ams/account/v2/verify-otp",
    params,
    noAuthentication: true,
    headers: { config: "MYTOUR" },
    baseURL: configs().GATE_URl,
  } as any);
};
export const requestOTPVerify = (phone: string | number) => {
  return api({
    method: "get",
    url: "ams/account/v2/send-otp",
    params: { phone, tokenType: "PHONE_VERIFY" },
    headers: { config: "MYTOUR" },
    baseURL: configs().GATE_URl,
  });
};
export const verifyOTPSignUp = (params: some) => {
  return api({
    method: "get",
    url: "/fresh-merchant/account/oauth-signup",
    params,
    headers: { config: "MYTOUR" },
    baseURL: configs().GATE_URl,
  });
};
export const registerAccount = (data: some) => {
  return api({
    method: "post",
    url: "/fresh-merchant/account/signup-otp",
    noAuthentication: true,
    data,
    baseURL: configs().GATE_URl,
  } as any);
};
export const updateAccountDetail = (data: some) => {
  return api({
    method: "post",
    url: "/ams/account/edit-detail",
    data,
    baseURL: configs().GATE_URl,
  });
};
export const registerStore = (data: some) => {
  return api({
    method: "post",
    url: "/fresh-merchant/chain-store",
    data,
    baseURL: configs().GATE_URl,
  });
};
export const getChainStoreData = () => {
  return api({
    method: "get",
    url: "/fresh-merchant/chain-store/static-data",
    baseURL: configs().GATE_URl,
  });
};
export const requestOTPChangePassword = (params: some) => {
  return api({
    method: "get",
    url: "/ams/account/v2/send-otp",
    params,
    headers: { config: "MYTOUR" },
    baseURL: configs().GATE_URl,
  });
};
export const changePassword = (data: some) => {
  return api({
    method: "post",
    url: "/ams/account/change-password-with-otp",
    data,
    headers: { config: "MYTOUR" },
    baseURL: configs().GATE_URl,
  });
};
export const changePhoneEmail = (params: some) => {
  return api({
    method: "get",
    url: "/ams/account/v2/verify-otp",
    params,
    headers: { config: "MYTOUR" },
    baseURL: configs().GATE_URl,
  });
};

// notify
export const moreNotify = (params: some) => {
  return api({
    method: "get",
    url: "/msgs/notify/more-notify",
    params: { app: "fresh-merchant", limit: 10 },
    headers: { "msg-app": "fresh-merchant" },
    baseURL: configs().GATE_URl,
  });
};
export const resetCount = (params: some) => {
  return api({
    method: "post",
    url: "/msgs/notify/reset-count",
    headers: { "msg-app": "fresh-merchant" },
    baseURL: configs().GATE_URl,
  });
};
export const markAllRead = (params: some) => {
  return api({
    method: "post",
    url: "/msgs/notify/mark-all-read",
    headers: { "msg-app": "fresh-merchant" },
    baseURL: configs().GATE_URl,
  });
};
export const markRead = (ids: number[]) => {
  return api({
    method: "post",
    url: "/msgs/notify/mark-read",
    data: { ids },
    headers: { "msg-app": "fresh-merchant" },
    baseURL: configs().GATE_URl,
  });
};
export const sendForgotPasswordOTP = (data: some) => {
  return api({
    method: "post",
    url: `/ams/account/forget-password/v2`,
    data,
    noAuthentication: true,
    baseURL: configs().GATE_URl,
  } as any);
};
export const forgotPasswordV2 = (data = {}) => {
  const option = {
    method: "post",
    url: "/ams/account/otp-set-password",
    data,
    noAuthentication: true,
    baseURL: configs().GATE_URl,
  };
  return api(option as any);
};
