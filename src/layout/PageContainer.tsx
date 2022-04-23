import { Box } from "@material-ui/core";
import React from "react";
import DefaulHeader, { HeaderProps } from "./DefaulHeader";
import DefaultFooter from "./DefaultFooter";

interface PageContainerProps {
  headerProps?: HeaderProps;
  classContent?: string;
}

const PageConainer: React.FC<PageContainerProps> = ({
  headerProps,
  classContent,
  children,
}) => {
  return (
    <Box style={{ minHeight: "100vh" }}>
      <DefaulHeader {...headerProps} />
      <Box style={{ minHeight: "80vh" }} className={classContent}>
        {children}
      </Box>
      <DefaultFooter />
    </Box>
  );
};

export default PageConainer;
