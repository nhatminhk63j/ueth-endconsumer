import { actionUploadFile } from "modules/common/CommonServices";

export const useUpload = () => {
  const uploadImage = async (file?: File | string) => {
    if (!file) {
      return;
    }
    if (typeof file === "string") {
      return file;
    }
    const img = await actionUploadFile([file]);

    return img.data.publicUrl;
  };
  return { uploadImage };
};
export const getBase64 = (file: File) => {
  return new Promise<string>((resolve) => {
    let baseURL = "";
    // Make new FileReader
    const reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(file);

    // on reader load somthing...
    reader.onload = () => {
      // Make a fileInfo Object
      baseURL = reader.result as string;
      resolve(baseURL);
    };
  });
};
