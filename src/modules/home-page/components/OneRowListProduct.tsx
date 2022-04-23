import { makeStyles, Box, Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../common/ProductCard";
import WrapList from "../../common/WrapList";
interface OneRowListProductProps {
  title: string;
  products: Product[];
}
const useStyle = makeStyles((theme) => ({
  image: {
    width: 80,
    height: 80,
  },
  grid: {
    width: "100%",
  },
}));

const OneRowListProduct = ({ title, products }: OneRowListProductProps) => {
  const classes = useStyle();

  return (
    <WrapList title={title}>
      <Box className={classes.grid}>
        <Grid
          container
          spacing={2}
          alignItems="flex-end"
          justifyContent="space-between"
        >
          {products.slice(0, 6).map((item) => (
            <Grid item key={item.id}>
              <Link
                to={`product/${item.id}`}
                style={{ textDecoration: "none" }}
              >
                <ProductCard product={item} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </WrapList>
  );
};

export default OneRowListProduct;
