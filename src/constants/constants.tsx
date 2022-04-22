export const LAST_FORGOT_PASSWORD_INFO = "LAST_FORGOT_PASSWORD_INFO";
export const ACCESS_TOKEN = "ACCESS_TOKEN";
export const TOKEN = "TOKEN";
export const REFRESH_TOKEN = "REFRESH_TOKEN";
export const ACCOUNTS = "ACCOUNTS";
export const DEVICE_ID: string = "DEVICE_ID";
export const UUID: string = "UUID";
export const CA_ID: string = "caId";
export const SUCCESS_CODE = 200;
export const SIDE_BAR_WIDTH: number = 240;
export const HOUR_MINUTE = "HH:mm";
export const DATE_FORMAT = "DD/MM/YYYY";
export const DATE_FORMAT_ALL = `${DATE_FORMAT} ${HOUR_MINUTE}`;

export const CA_INFO_DEV: caIDItemProps = {
  appId: "ueth-web",
  appKey: "740fa3ca-6a14-4863-8589-f3926417a6701",
};
export const CA_INFO: caIDItemProps = {
  appId: "ueth-web",
  appKey: "740fa3ca-6a14-4863-8589-f3926417a6701",
};

export const ROLES: some = {
  ADMIN: "ADMIN",
  GUEST: "GUEST",
};
// export const KEY_GOOGLE_MAP = 'AIzaSyBclPlXZBHfIvjCJHNGvex4fnXIymGjuKQ';
export const KEY_GOOGLE_MAP = "AIzaSyBxC0tgcG8yQN6m2ErSwzWkNCtJPuW07bE";
export const googleInfoDev: some = {
  CLIENT_ID:
    "125756005771-05kpupblmb6j9huqb0bhltpd67frei9h.apps.googleusercontent.com",
};
export const facebookInfoDev: some = {
  facebook_id: "368428368006379",
  redirectUri: window.location.origin,
};
export const googleInfo: some = {
  CLIENT_ID:
    "125756005771-05kpupblmb6j9huqb0bhltpd67frei9h.apps.googleusercontent.com",
};
export const facebookInfo: some = {
  facebook_id: "368428368006379",
  redirectUri: window.location.origin,
};
export const SCREEN_LOGIN: some = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  VERIFY_SOCIAL: "VERIFY_SOCIAL",
  OTP: "OTP",
  PASSWORD: "PASSWORD",
  STORE_OWNER: "STORE_OWNER",
  STORE: "STORE",
};

export const PHONE_REGEX =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const WEBSITE_REGEX =
  /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

export const MAX_FILE_SIZE = 1048576 * 5;

export const validNumberRegex = /^[0-9]*$/;
export const timeRegex = /^([0-2][0-3]|[0-1][0-9])([0-9]|[0-5][0-9])?$/;

export enum OrderStatus {
  PENDING = "pending",
  CANCELLED = "cancelled",
  REJECTED = "rejected",
  CONFRIMED = "confirmed",
  DELIVERY = "delivery",
  DELIVERIED = "deliveried",
}
