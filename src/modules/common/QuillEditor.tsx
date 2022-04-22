import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { RED, WHITE } from "assets/theme/colors";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
];
interface Props {
  placeholder: string;
  defaultValue: string;
  handleChange: (htmlValue: any) => void;
  errorMessage?: string;
  style?: React.CSSProperties;
}
const QuillEditor: React.FC<Props> = (props) => {
  const { defaultValue, errorMessage, handleChange, style } = props;

  return (
    <>
      <ReactQuill
        theme="snow"
        onChange={handleChange}
        value={defaultValue}
        modules={modules}
        formats={formats}
        bounds=".app"
        placeholder={props?.placeholder}
        style={{
          background: WHITE,
          wordBreak: "break-word",
          display: "flex",
          flexDirection: "column",
          minHeight: 300,
          ...style,
        }}
        preserveWhitespace
      />
      {errorMessage && <span style={{ color: RED }}>{errorMessage}</span>}
    </>
  );
};

export default QuillEditor;
