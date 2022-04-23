import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { SECONDARY } from "assets/theme/colors";
import React from "react";

interface PriceBoxProps {
  price?: number;
}

const useStyles = makeStyles({
  root: {
    borderRadius: 5,
    padding: "20px 10px",
    background:
      "linear-gradient(90.51deg, #F1F5F9 10.87%, rgba(241, 245, 249, 0) 94.51%)",
  },
  price: {
    color: SECONDARY,
    fontSize: 28,
    fontWeight: "bold",
  },
});

const PriceBox: React.FC<PriceBoxProps> = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container>
      <Typography className={classes.price}>175000 đ</Typography>
    </Grid>
  );
};

export default PriceBox;
