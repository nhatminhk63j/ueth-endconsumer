import { CircularProgress } from "@material-ui/core";
import React from "react";
import { Row } from "./Elements";

const Spinner = () => {
  return (
    <Row
      style={{
        justifyContent: "center",
        aliginItems: "center",
        padding: 100,
        fotnSize: 16,
      }}
    >
      <CircularProgress size="29px" />
    </Row>
  );
};

export default Spinner;
