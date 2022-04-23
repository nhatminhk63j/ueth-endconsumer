import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import React from "react";

interface ProviderLineProps {}

const ProviderLine = () => {
  return (
    <Grid>
      <Grid container style={{ width: "auto" }}>
        <Avatar
          src="https://storage.googleapis.com/public-tripi/fresh/img/454713AKELvM/d62f62a13104f95aa015.jpg"
          style={{ width: 80, height: 80 }}
        />
        <Box>
          <Typography variant="body1">
            Bee Fruits - Trái Cây Nhập Khẩu
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProviderLine;
