import { Box, ButtonBase, Grid, Typography } from "@material-ui/core";
import { ReactComponent as UploadIcon } from "assets/icons/ic_upload.svg";
import { GREY_100, GREY_400 } from "assets/theme/colors";
import { SUCCESS_CODE } from "constants/constants";
import { actionUploadFile, postMedia } from "modules/common/CommonServices";
import { snackbarSetting } from "modules/common/Elements";
import { useSnackbar } from "notistack";
import React, { useCallback, useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import LoadingIcon from "../LoadingIcon";
import DragItem from "./DragItem";
import { GridCustom, GridImage, GridItem } from "./Grid";
import GridContext from "./GridContext";

interface Props {
  isChecked: number[];
  handleChange(id: number, index: number): void;
  setListPhotos(value: some[]): void;
  listPhotos: some[];
  setListPhotosId(value: any): void;
  listPhotosId: number[];
  chainStoreId: number;
}

const DndPhotosCore: React.FC<Props> = (props: Props) => {
  const { items, moveItem } = useContext<any>(GridContext);
  const {
    isChecked,
    handleChange,
    setListPhotos,
    listPhotos,
    setListPhotosId,
    listPhotosId,
    chainStoreId,
  } = props;
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const temListPhotos: some[] = [];

  const [loading, setLoading] = useState(false);

  const actionMedia = useCallback(
    async (url: string) => {
      try {
        const params = [
          {
            url: url,
            type: 0,
          },
        ];
        const res1: any = await postMedia(params, chainStoreId);
        if (res1.code === 200) {
          setListPhotosId([...listPhotosId, ...res1.data.items]);
        }
      } catch (error) {}
    },
    [chainStoreId, listPhotosId, setListPhotosId]
  );

  const handleUploadFile = useCallback(
    async (value: File[], number: number = 0, filesLength?: number) => {
      try {
        setLoading(true);
        const json: some = await actionUploadFile([value[number]]);

        if (json?.code === SUCCESS_CODE) {
          actionMedia(json?.data.publicUrl);
          temListPhotos.push(json?.data);
        }
      } catch (error) {
      } finally {
        if (number + 1 < value.length) {
          handleUploadFile(value, number + 1, filesLength);
        }
        if (number + 1 === value.length) {
          const tempLengthPhotos = listPhotos.length + temListPhotos.length;
          if (tempLengthPhotos > 5) {
            enqueueSnackbar(
              "Số lượng ảnh đại diện vượt quá 5 ảnh",
              snackbarSetting((key) => closeSnackbar(key), {
                color: "error",
              })
            );
          }
          const tempListPhotos = [...listPhotos, ...temListPhotos].slice(0, 5);
          setListPhotos(tempListPhotos);
          setLoading(false);
        }
      }
    },
    [
      actionMedia,
      closeSnackbar,
      enqueueSnackbar,
      listPhotos,
      setListPhotos,
      temListPhotos,
    ]
  );

  const uploadPhoto = useCallback(
    async (files: File[]) => {
      // if (files.length > 100) {
      //   return enqueueSnackbar(
      //     intl.formatMessage({ id: 'IDS_HMS_IMAGE_NUMBER_MAX' }),
      //     snackbarSetting(key => closeSnackbar(key), {
      //       color: 'error',
      //     }),
      //   );
      // }

      files?.forEach(async (file: File, idx: number) => {
        // const fileImagesError: File[] = [];
        const fileImagesUploads: File[] = [];
        const image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = async () => {
          // if (image.width > MAX_DIMENSION || image.height > MAX_DIMENSION) {
          //   enqueueSnackbar(
          //     intl.formatMessage({ id: 'IDS_HMS_IMAGE_SIZE_MAX' }),
          //     snackbarSetting(key => closeSnackbar(key), {
          //       color: 'error',
          //     }),
          //   );
          //   fileError.push(file);
          // } else if (image.width < MIN_DIMENSION_WIDTH || image.height < MIN_DIMENSION_HEIGHT) {
          //   enqueueSnackbar(
          //     intl.formatMessage ({ id: 'IDS_HMS_IMAGE_SIZE_MIN' }),
          //     snackbarSetting(key => closeSnackbar(key), {
          //       color: 'error',
          //     }),
          //   );
          fileImagesUploads.push(file);
          // } else {
          // }
          // if (fileError.length + fileUploads.length === files.length) {
          await handleUploadFile(fileImagesUploads, 0, files.length);
        };
      });
    },
    [handleUploadFile]
  );

  const { getRootProps, getInputProps } = useDropzone({
    noKeyboard: true,
    multiple: true,
    onDrop: (acceptedFiles: File[]) => {
      // setTotalPhotoUpload(acceptedFiles.length);
      // setLoading(true);
      let isUpload = true;
      if (!acceptedFiles.length) {
        enqueueSnackbar(
          "Chỉ chấp nhận định dạng .jpg và .png. Kích thước ảnh tối đa là 5MB, tối thiểu là 10KB.",
          snackbarSetting((key) => closeSnackbar(key), {
            color: "error",
          })
        );
        setLoading(false);
        isUpload = false;
      }
      // if (acceptedFiles.length > MAX_NUMBER_PHOTOS) {
      //   enqueueSnackbar(
      //     intl.formatMessage({ id: 'IDS_HMS_IMAGE_NUMBER_MAX' }),
      //     snackbarSetting(key => closeSnackbar(key), {
      //       color: 'error',
      //     }),
      //   );
      //   setLoading(false);
      //   isUpload = false;
      // }
      isUpload && uploadPhoto && uploadPhoto(acceptedFiles);
    },
    accept: "image/jpeg,image/png,image/jpg",
    maxSize: 10485760,
    minSize: 10240, // 10kb
  });

  if (loading)
    return (
      <Box display="flex" justifyContent="center" width="100%">
        <LoadingIcon style={{ height: 320 }} />
      </Box>
    );
  return (
    <div className="DndPhotosCore">
      <GridCustom>
        {items &&
          items.map((item: any, index: number) => (
            <DragItem key={item.id} id={item.id} onMoveItem={moveItem}>
              {item && (
                <GridItem>
                  <GridImage
                    isChecked={isChecked}
                    handleChange={handleChange}
                    src={item.url}
                    index={index}
                    id={item.id}
                  />
                </GridItem>
              )}
            </DragItem>
          ))}
        <ButtonBase
          style={{
            background: GREY_100,
            border: `1px dashed ${GREY_400}`,
            boxSizing: "border-box",
            borderRadius: 4,
            width: 124,
            height: 124,
            display: "flex",
            marginTop: 4,
          }}
          {...getRootProps()}
          // onClick={saveFunctions}
        >
          <input {...getInputProps()} />
          <Typography
            variant="body2"
            style={{
              color: GREY_400,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <UploadIcon className="svgFillAll" width={24} stroke={GREY_400} />
          </Typography>
        </ButtonBase>
      </GridCustom>

      <Grid item xs={3} />
    </div>
  );
};

export default DndPhotosCore;
