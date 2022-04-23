import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import { ShopIcon } from "assets/icons";
import { ORANGE, ORANGE_300, WHITE } from "assets/theme/colors";
import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

const useStyle = makeStyles((theme) => ({
  container: {
    width: 180,
    height: 300,
    borderRadius: 10,
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
  address: {
    height: "24px",
    width: "60x",
    textOverflow: "ellipsis",
    wordWrap: "break-word",
    overflow: "hidden",
  },
  row: {
    // flexDirection: "column",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textDecoration: "none",
  },
  price: {
    color: ORANGE,
  },
  icon: {
    marginRight: "2px",
    width: 16,
  },
  buyButton: {
    height: "32px !important",
    minHeight: "unset",
    backgroundColor: ORANGE,
    color: WHITE,
    boxShadow: "none",
    "&:hover": {
      backgroundColor: ORANGE_300,
    },
  },
  mt10: {
    marginTop: 10,
  },
}));

const strimAddress = (address: any): string => {
  const [_address] = address.split(",").slice(-1);
  // console.log(address.split(","));
  // console.log(address);
  return address ? _address : "Hà Nội";
};

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
          <Typography variant="subtitle2" className={classes.address}>
            {`${strimAddress(product?.provider?.address)}`}
          </Typography>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <ShopIcon className={classes.icon} />
            <Typography variant="subtitle2">
              {product.quantityOfStock &&
                `${product.quantityOfStock}${product.unit}`}
              {!product.quantityOfStock && `10kg`}
            </Typography>
          </div>
        </Box>

        <Box className={classes.row}>
          <Typography className={classes.price}>
            {product.price.toLocaleString()}đ
          </Typography>

          <Link to="/product/123" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              className={`${classes.buyButton} ${classes.mt10}`}
            >
              Mua
            </Button>
          </Link>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductCard;
