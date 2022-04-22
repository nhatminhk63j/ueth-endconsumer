import { Typography, Box } from "@material-ui/core";
import React, { FC, ReactNode } from "react";
import { FormattedMessage } from "react-intl";
import { Row } from "./Elements";

interface PageHeaderProps {
  title?: string;
  actions?: ReactNode;
  breadcumbs?: { label: string; link?: string }[];
}

const PageHeader: FC<PageHeaderProps> = ({ title, actions, breadcumbs }) => {
  return (
    <Row style={{ justifyContent: "space-between", marginBottom: 5 }}>
      {title && (
        <Typography
          variant="h5"
          style={{ lineHeight: "29px", fontWeight: 600 }}
        >
          <FormattedMessage id={title} />
        </Typography>
      )}
      {breadcumbs && <Box />}
      {actions}
    </Row>
  );
};

export default PageHeader;
