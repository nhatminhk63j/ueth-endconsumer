import { Grid } from "@material-ui/core";
import React, { FC } from "react";

const ViewLayout: FC = ({ children }) => (
  <Grid container spacing={3} alignItems="flex-start">
    {children}
  </Grid>
);
const ViewPrimary: FC = ({ children }) => (
  <Grid item xs={12} md={12} lg={8} xl={9}>
    {children}
  </Grid>
);

const ViewSecondary: FC = ({ children }) => (
  <Grid item xs={12} md={12} lg={4} xl={3}>
    {children}
  </Grid>
);

export default Object.assign(ViewLayout, {
  Primary: ViewPrimary,
  Secondary: ViewSecondary,
});
