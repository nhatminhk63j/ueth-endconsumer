import { UAParser } from "ua-parser-js";

const has = Object.prototype.hasOwnProperty;

export const checkDeviceType = () => {
  const parser = new UAParser();
  return parser.getResult();
};

export const isMobile = () => {
  return checkDeviceType().device.type === "mobile";
};

export const isEmpty = (prop) => {
  return (
    prop === null ||
    prop === undefined ||
    (has.call(prop, "length") && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
  );
};

export const isEmptyOrSpaces = (val) => {
  return isEmpty(val) || val.match(/^ *$/) !== null;
};

export const isEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\\"]+(\.[^<>()[\]\\.,;:\s@\\"]+)*)|(\\".+\\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const isPhone = (phone) => {
  const re = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
  return re.test(phone);
};

export const isAlphabetAndNumber = (val, whiteSpace?: boolean) => {
  let re = /^[0-9A-Za-z]*$/;
  if (whiteSpace) re = /^[0-9A-Za-z ]*$/;
  return re.test(val);
};

export const isOnlyNumber = (val, whiteSpace?: boolean) => {
  let re = /^[0-9]*$/;
  if (whiteSpace) re = /^[0-9 ]*$/;
  return re.test(val);
};

export const isOnlyAlphabet = (val, whiteSpace?: boolean) => {
  let re = /^[A-Za-z]*$/;
  if (whiteSpace) re = /^[A-Za-z ]*$/;
  return re.test(val);
};

export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

export const formatBytes = (a: number, b = 2) => {
  if (0 === a) return "0 Bytes";
  const c = 0 > b ? 0 : b,
    d = Math.floor(Math.log(a) / Math.log(1024));
  return (
    parseFloat((a / Math.pow(1024, d)).toFixed(c)) +
    " " +
    ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d]
  );
};

export const convertTime = (value: number) => {
  if (value === 0) return "0h";
  else {
    const secondToHour = value / 3600;
    const hours = Math.floor(secondToHour);
    const minutes = Math.floor((secondToHour - Math.floor(secondToHour)) * 60);
    const seconds = Math.round(value - hours * 3600 - minutes * 60);
    if (minutes === 0 && hours !== 0) return `${hours}h`;
    if (hours === 0 && minutes !== 0) return `${minutes}min`;
    if (minutes === 0 && hours === 0 && seconds !== 0) return `${seconds}s`;
    if (minutes === 0 && hours === 0 && seconds === 0) return `0h`;
    return hours !== 0 ? `${hours}h ${minutes}min` : "0h";
  }
};
export const convertImageBase64 = (content: any) => {
  if (isEmpty(content)) return "";
  return `data:image/jpeg;base64,${content}`;
};

export const convertBase64 = (content: any, contentType: string) => {
  if (isEmpty(content)) return "";
  return `data:${contentType};base64,${content}`;
};
