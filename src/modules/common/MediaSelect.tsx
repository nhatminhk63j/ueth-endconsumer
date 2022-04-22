import { Typography, FormLabel } from "@material-ui/core";
import { GREY_100, GREY_400 } from "assets/theme/colors";
import { UploadIcon } from "assets/icons";
import React, { ChangeEventHandler, forwardRef, useState } from "react";

interface Props {
  onChange?: (images: File[]) => void;
  id?: string;
  value?: some;
  replace?: boolean;
  defaultValue?: string;
}

let defaultId = 0;

const MediaSelect = forwardRef(
  ({ id, value, onChange, replace, defaultValue }: Props, ref: any) => {
    const idInput = id || `media-select- ${++defaultId}`;
    const [image, setImage] = useState(defaultValue);

    const inputOnChange: ChangeEventHandler<HTMLInputElement> = async (
      event
    ) => {
      const { files } = event.target;

      if (files?.length === 0) {
        return;
      }
      const filesArray: File[] = Array.prototype.slice.call(files);
      onChange && onChange(filesArray);
      setImage(URL.createObjectURL(filesArray[0]));
    };

    return (
      <FormLabel
        htmlFor={idInput}
        style={{
          background: GREY_100,
          boxSizing: "border-box",
          borderRadius: 4,
          width: 240,
          height: 240,
          display: "flex",
          marginTop: 4,
          justifyContent: "center",
        }}
      >
        {!image ? (
          <Typography
            variant="body2"
            style={{
              color: GREY_400,
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <UploadIcon className="svgFillAll" stroke={GREY_400} />
          </Typography>
        ) : (
          <img
            src={image}
            width={240}
            style={{
              display: "inline-block",
              outline: `4px solid #ffffff`,
              boxShadow: "0px 0px 2px 5px #c5c2c2",
              border: "1px solid #c5c2c2",
            }}
            alt=""
          />
        )}

        <input hidden onChange={(e) => e} value={value ? 1 : ""} ref={ref} />
        <input
          type="file"
          id={idInput}
          hidden
          multiple
          onChange={inputOnChange}
          onBlur={inputOnChange}
          accept=".jpg, .jpeg, .png"
        />
      </FormLabel>
    );
  }
);

MediaSelect.displayName = "Media Select";

export default MediaSelect;
