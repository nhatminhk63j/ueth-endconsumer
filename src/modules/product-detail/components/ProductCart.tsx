import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { BACK_GROUND } from "assets/theme/colors";
import React from "react";

const useStyle = makeStyles({
  root: {
    gap: 20,
  },
  img: {
    width: 110,
    height: 110,
    backgroundColor: BACK_GROUND,
    borderRadius: 20,
  },
  title: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

const ProductCart: React.FC<Product> = (product) => {
  const classes = useStyle();

  return (
    <Grid container className={classes.root}>
      <img className={classes.img} alt="" src={product.avatar} />
      <Box style={{ marginTop: 10 }}>
        <Typography className={classes.title}>{product.name}</Typography>
        <Typography>{product.provider?.name}</Typography>
      </Box>
    </Grid>
  );
};

export default ProductCart;
