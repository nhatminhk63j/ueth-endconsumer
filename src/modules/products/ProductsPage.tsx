import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  makeStyles,
  Typography,
  Checkbox,
  FormHelperText,
} from "@material-ui/core";
import { WHITE } from "assets/theme/colors";
import { defaultProducts, useProducts } from "hooks/useProducts";
import PageConainer from "layout/PageContainer";
import ProductCard from "modules/common/ProductCard";
import WrapList from "modules/common/WrapList";
import React from "react";
import { useQueryParams, NumberParam, StringParam } from "use-query-params";
const useStyle = makeStyles((theme) => ({
  content: {
    backgroundColor: "#f1f5f9",
    fontFamily: "Varela Round",
    padding: 30,
  },
  formControl: {
    margin: theme.spacing(3),
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
}));
const ProductsPage = () => {
  const classes = useStyle();
  const [query] = useQueryParams({
    q: StringParam,
  });
  console.log(query);
  const products = defaultProducts.concat(defaultProducts);
  const addressArray = [...new Set(products.map((a) => a.provider?.address))];
  return (
    <PageConainer classContent={classes.content}>
      <Container>
        {/* <Box className={classes.statement}>
          <Typography variant="h6">Kết quả tìm kiếm cho '{query.q}'</Typography>
        </Box> */}
        <WrapList title="Danh mục sản phẩm">
          <Grid container>
            <Grid item xs={2}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Lọc theo địa điểm</FormLabel>
                <FormGroup>
                  {addressArray.map(
                    (address) =>
                      address && (
                        <FormControlLabel
                          control={
                            <Checkbox
                              // checked={gilad}
                              // onChange={handleChange}
                              name={address}
                            />
                          }
                          label={address}
                        />
                      )
                  )}
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={10}>
              <Box>
                <Grid container spacing={3}>
                  {products.map((item) => (
                    <Grid item>
                      <ProductCard product={item} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </WrapList>
      </Container>
    </PageConainer>
  );
};

export default ProductsPage;
