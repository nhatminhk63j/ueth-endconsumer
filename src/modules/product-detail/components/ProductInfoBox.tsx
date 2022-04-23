import {
  Box,
  Button,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AddCircle, CardTravelOutlined, Remove } from "@material-ui/icons";
import { BACK_GROUND, WHITE } from "assets/theme/colors";
import PlaceShip from "modules/common/PlaceShip";
import React from "react";
import PriceBox from "./PriceBox";

interface ProductInfoProps {
  product?: Product;
}

const useStyle = makeStyles({
  root: {},
  img: {
    width: "100%",
    borderRadius: 5,
    height: "100%",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  btn_circle: {
    boxShadow: "none",
    backgroundColor: BACK_GROUND,
    marginRight: 5,
    marginLeft: 5,
  },
});

const img =
  "https://storage.googleapis.com/public-tripi/fresh/img/454732sPhmvw/241319364_3105349876451467_128570006325251850_n.jpg?w=640&q=75";

const ProductInfoBox: React.FC<ProductInfoProps> = () => {
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <Grid container spacing={4}>
        <Grid item sm={6} md={5} lg={5}>
          <img className={classes.img} src={img} alt="" />
        </Grid>
        <Grid item sm={6} md={7} lg={7}>
          <Typography variant="h5" className={classes.title}>
            Xúc xích cốm 1Kg
          </Typography>
          <Grid direction="column" style={{ gap: 20 }} container>
            <Grid container>
              <Typography variant="body2" color="textPrimary">
                Thương hiệu: Cẩm mộc Bà Thanh
              </Typography>
              &nbsp; &nbsp;&nbsp;&nbsp;
              <Typography variant="body2" color="textPrimary">
                Nơi sản xuất: Mễ Trì
              </Typography>
            </Grid>
            <Grid container>
              <Typography variant="body2" color="textSecondary">
                Chưa có đánh giá
              </Typography>
              &nbsp; &nbsp;&nbsp;&nbsp;
              <Typography variant="body2" color="textPrimary">
                Nơi sản xuất: Mễ Trì
              </Typography>
            </Grid>
            <PriceBox />
            <Grid container alignItems="center">
              <Grid item md={2}>
                Vận chuyển
              </Grid>
              <Grid item md={10}>
                <PlaceShip />
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item md={2}>
                Số lượng
              </Grid>
              <Grid item md={10} container alignItems="center">
                <Button variant="contained" className={classes.btn_circle}>
                  <Remove />
                </Button>
                <Typography style={{ margin: "0 20px" }}>5</Typography>
                <Button variant="contained" className={classes.btn_circle}>
                  <Remove />
                </Button>
                <Typography variant="body2">Trong kho : 500</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <Button
                  fullWidth
                  color="secondary"
                  variant="contained"
                  style={{ boxShadow: "none" }}
                >
                  Mua ngay
                </Button>
              </Grid>
              <Grid item md={6}>
                <Button fullWidth color="secondary" variant="outlined">
                  <Grid container alignItems="center" justifyContent="center">
                    <CardTravelOutlined />
                    &nbsp; Thêm vào giỏ hàng
                  </Grid>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductInfoBox;
