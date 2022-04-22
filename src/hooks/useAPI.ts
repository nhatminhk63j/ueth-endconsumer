import api from "utils/helpers/api";
import useSWR, { SWRConfiguration } from "swr";
import { AxiosRequestConfig } from "axios";

const fetcher = <T>({ url, params, options }) => {
  return api({
    method: "GET" as any,
    url,
    params: params,

    ...options,
  }).then((res: any) => res.data as T);
};

export const useAPI = <T>(
  path?: string | null | false,
  params?: object,
  options?: AxiosRequestConfig,
  swrOptions?: SWRConfiguration
) => {
  const { data, isValidating, error, mutate } = useSWR<T>(
    path && { url: path, params, options },
    fetcher,
    swrOptions || {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      shouldRetryOnError: false,
    }
  );
  return { data, error, loading: !data && isValidating, mutate };
};
export const API = {
  GET<T = any>(url = "", params = {}, options = {} as RequestInit) {
    return api<T>({
      url,
      params,
      ...options,
      method: "GET",
    });
  },
  POST<T = any>(url = "", data = {}, options = {} as RequestInit) {
    return api<T>({
      url,
      data,
      ...options,
      method: "POST",
    }).then((res: any) => res.data as T);
  },
  PUT<T = any>(url = "", data = {}, options = {} as RequestInit) {
    return api<T>({
      url,
      data,
      ...options,
      method: "PUT",
    }).then((res: any) => res.data as T);
  },
  DELETE<T = any>(url = "", params = {}, options = {} as RequestInit) {
    return api<T>({
      url,
      params,
      ...options,
      method: "get",
    }).then((res: any) => res.data as T);
  },
};
