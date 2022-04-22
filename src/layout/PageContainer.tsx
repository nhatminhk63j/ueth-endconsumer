import { Box } from "@material-ui/core";
import React from "react";
import DefaulHeader, { HeaderProps } from "./DefaulHeader";
import DefaultFooter from "./DefaultFooter";

interface PageContainerProps {
  headerProps?: HeaderProps;
}

const PageConainer: React.FC<PageContainerProps> = ({
  headerProps,
  children,
}) => {
  return (
    <Box style={{ minHeight: "100vh" }}>
      <DefaulHeader {...headerProps} />
      <PageContent>{children}</PageContent>
      <DefaultFooter />
    </Box>
  );
};

export default PageConainer;

const PageContent: React.FC = ({ children }) => {
  return <Box style={{ minHeight: "80vh" }}>{children}</Box>;
};
