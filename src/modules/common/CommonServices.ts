import api from "utils/helpers/api";
import { configs } from "utils/helpers/config";

export const actionUploadFile = (files: File[], config?: string) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("file", file);
    formData.append("config", config || "FRESH-PORTAL");
  });
  return api<UploadResponse>({
    method: "post",
    url: `${configs().UPLOAD_URL}/assets/file/upload`,
    data: formData,
  });
};

export const postMedia = (params: some, chainStoreId: number) => {
  return api({
    method: "post",
    url: `/fresh-merchant/gallery/media?chainStoreId=${chainStoreId}`,
    data: params,
  });
};
