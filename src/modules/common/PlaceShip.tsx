import { Button, Grid, Typography } from "@material-ui/core";
import { DeliveryIcon } from "assets/icons";
import React from "react";

interface PlaceShipProps {
  place?: string;
}

const PlaceShip: React.FC<PlaceShipProps> = ({ place }) => {
  return (
    <Grid
      container
      style={{
        backgroundColor: "#F1F5F9",
        borderRadius: 5,
        padding: "5px 10px",
      }}
      justifyContent="space-between"
    >
      <Grid container alignItems="center" style={{ width: "auto" }}>
        <DeliveryIcon style={{ width: 40 }} />
        &nbsp;&nbsp;&nbsp;
        <Typography variant="body2">
          Bạn chưa thiết lập địa chị giao hàng
        </Typography>
      </Grid>
      <Button>Thay đổi</Button>
    </Grid>
  );
};

export default PlaceShip;
