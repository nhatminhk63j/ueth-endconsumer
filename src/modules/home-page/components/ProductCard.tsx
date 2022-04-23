import { Box, makeStyles, Paper, Typography } from "@material-ui/core";
import { ShopIcon } from "assets/icons";
import React from "react";
interface ProductCardProps {
  product: Product;
}

const useStyle = makeStyles((theme) => ({
  container: {
    width: 180,
    height: 280,
    borderRadius: 4,
    a: {
      textDecoration: "none",
    },
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 5,
    objectFit: "cover",
  },
  info: {
    padding: 10,
  },
  typo: {
    height: "48px",
    textOverflow: "ellipsis",
    wordWrap: "break-word",
    overflow: "hidden",
  },
  row: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "flex-end",
    textDecoration: "none",
  },
}));

const ProductCard = ({ product }: ProductCardProps) => {
  const classes = useStyle();
  return (
    <Paper className={classes.container}>
      <img
        src={product.avatar}
        alt={product.avatar}
        className={classes.image}
      />
      <Box className={classes.info}>
        <Typography variant="subtitle1" className={classes.typo}>
          {product.name}
        </Typography>
        <Box className={classes.row}>
          <ShopIcon />
          {`${product.quantityOfStock} ${product.unit}`}
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductCard;
