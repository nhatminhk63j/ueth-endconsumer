import { Button, Grid, Typography } from "@material-ui/core";
import { DateIcon } from "assets/icons";
import React from "react";

interface PlaceShipProps {
  place?: string;
}

const DateShip: React.FC<PlaceShipProps> = ({ place }) => {
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
        <DateIcon style={{ width: 40, height: 30 }} />
        &nbsp;&nbsp;&nbsp;
        <Typography variant="body2">Ngày 25/3/2022</Typography>
      </Grid>
      <Button>Thay đổi</Button>
    </Grid>
  );
};

export default DateShip;
