import axios, { AxiosRequestConfig } from "axios";
import { sha256 } from "js-sha256";
import { TOKEN, REFRESH_TOKEN, UUID } from "constants/constants";
import { configs } from "./config";
import { isEmpty } from "./helpers";
import { getRefreshToken, requestLogout } from "modules/system/systemAction";

const getAppHash = () => {
  const currentTime = new Date().getTime();
  return Buffer.from(
    sha256(
      `${currentTime / 1000 - ((currentTime / 1000) % 300)}:${
        configs().APP_KEY
      }`
    ),
    "hex"
  ).toString("base64");
};

const request = axios.create();

let isAlreadyFetchingAccessToken = false;
let subscribers: any[] = [];

function onAccessTokenFetched(access_token: any) {
  subscribers = subscribers.map((callback: any) => callback(access_token));
  subscribers = [];
}

function addSubscriber(callback: any) {
  subscribers.push(callback);
}

request.interceptors.request.use(
  (config: some) => {
    let temp: some = {
      ...config,
      headers: {
        ...config?.headers,
        appId: configs().APP_ID,
        appHash: getAppHash(),
        "device-id": `${localStorage.getItem(UUID)}`,
        Authorization: `Bearer ${localStorage.getItem(TOKEN)}`,
        version: "9.0",
      },
    };
    if (
      isEmpty(localStorage.getItem(TOKEN)) ||
      config.url.includes("/login") ||
      config.url.includes("/refresh-token") ||
      temp.noAuthentication
    ) {
      delete temp.headers[`login-token`];
      delete temp.headers[`Authorization`];
    }
    delete temp.noAuthentication;
    return temp;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response: any) => {
    if (response?.request?.responseType === "blob") {
      return response?.request?.response;
    } else {
      const resData: some = JSON.parse(response?.request?.response);
      if (resData.code === 3003) {
        window.alert(
          "Hệ thống yêu cầu cài đặt thời gian chính xác để thực hiện tính năng chat hỗ trợ. Quý khách vui lòng mở phần Cài đặt của thiết bị này và chuyển Ngày Giờ sang chế độ Tự động"
        );
      }

      if (resData.code === 401) {
        const originalRequest = response.config;
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        if (
          refreshToken &&
          !originalRequest._retry &&
          response.config.url.includes("/login") &&
          response.config.url.includes("/refresh-token")
        ) {
          originalRequest._retry = true;
          if (!isAlreadyFetchingAccessToken) {
            isAlreadyFetchingAccessToken = true;
            getRefreshToken(refreshToken)
              .then((res: any) => {
                if (res.code === 200) {
                  isAlreadyFetchingAccessToken = false;
                  localStorage.setItem(TOKEN, res.data.idToken);
                  localStorage.setItem(REFRESH_TOKEN, res.data.refreshToken);
                  onAccessTokenFetched(res.data.idToken);
                } else {
                  subscribers = [];
                  requestLogout();
                }
              })
              .catch(() => {
                subscribers = [];
                requestLogout();
              });
          }
          const retryOriginalRequest = new Promise((resolve) => {
            addSubscriber((access_token: any) => {
              originalRequest.headers.Authorization = "Bearer " + access_token;
              resolve(
                axios(originalRequest)
                  .then((resRequest) => {
                    return resRequest?.request?.response;
                  })
                  .catch((error: any) => {
                    return Promise.reject(error.response);
                  })
              );
            });
          });
          return retryOriginalRequest;
        } else {
          subscribers = [];
          requestLogout();
        }
      } else {
        if (resData.code && resData.code !== 200) {
          return Promise.reject(resData);
        }
        return resData;
      }
    }
  },
  (error: any) => {
    return Promise.reject(error.response);
  }
);

const api = <T,>(options: AxiosRequestConfig): Promise<T> => {
  return request({
    baseURL: configs().GATE_URl + "/ueth-merchant/api/v1/",
    ...options,
    headers: { "Accept-Language": "vi", ...options.headers },
  }) as any;
};

export default api;

export function makeError(error) {
  if (!error) return;

  return error instanceof Error
    ? error
    : new Error(error?.data?.message || error?.message || `${error}`);
}
