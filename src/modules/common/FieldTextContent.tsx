import React,{ memo } from "react";
import { useField, useFormikContext } from "formik";
import FormControlTextField from "./FormControlTextField";

const FieldTextContent = (props) => {
  const [field, meta] = useField(props);
  const { submitCount } = useFormikContext();
  return (
    <FormControlTextField
      {...field}
      {...props}
      errorMessage={
        (meta.touched || submitCount > 0) && meta.error ? meta.error : undefined
      }
    />
  );
};

export default memo(FieldTextContent);
