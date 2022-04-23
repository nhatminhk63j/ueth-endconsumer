import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { WHITE } from "assets/theme/colors";
import { defaultProducts, useProducts } from "hooks/useProducts";
import PageConainer from "layout/PageContainer";
import ProductCard from "modules/common/ProductCard";
import React from "react";
import { useQueryParams, NumberParam, StringParam } from "use-query-params";
const useStyle = makeStyles({
  content: {
    backgroundColor: "#f1f5f9",
    fontFamily: "Varela Round",
    padding:30
  },
  statement: {
    padding: 30,
    textAlign: "center",
  },
  box: {
    backgroundColor: WHITE,
    padding: 24,
    borderRadius: 5,
  },
  items: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
    paddingBottom: 30,
  },
});
const SearchPage = () => {
  const classes = useStyle();
  const [query] = useQueryParams({
    q: StringParam,
  });
  console.log(query);
  const products = defaultProducts.concat(defaultProducts);
  return (
    <PageConainer classContent={classes.content}>
      <Container>
        <Box className={classes.statement}>
          <Typography variant="h6">Kết quả tìm kiếm cho '{query.q}'</Typography>
        </Box>
        <Grid container spacing={3}>
          {products.map((item) => (
            <Grid item>
              <ProductCard product={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </PageConainer>
  );
};

export default SearchPage;
