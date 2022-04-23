import { Avatar, Box, Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import ProductVote from "./ProductVote";

interface ProviderLineProps {}

const ProviderLine: React.FC<ProviderLineProps> = () => {
  return (
    <Grid container justifyContent="space-between">
      <Grid container style={{ width: "auto" }} alignItems="center">
        <Avatar
          src="https://storage.googleapis.com/public-tripi/fresh/img/454713AKELvM/d62f62a13104f95aa015.jpg"
          style={{ width: 80, height: 80 }}
        />
        <Box style={{ marginLeft: 15 }}>
          <Typography variant="body1" color="textPrimary">
            Bee Fruits - Trái Cây Nhập Khẩu
          </Typography>
          <Typography variant="body2" color="textSecondary">
            40 sản phẩm
          </Typography>
          <Button variant="outlined" color="secondary" style={{ marginTop: 5 }}>
            Xem shop
          </Button>
        </Box>
      </Grid>
      <Box>
        <ProductVote />
      </Box>
    </Grid>
  );
};

export default ProviderLine;
