import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { WHITE } from "assets/theme/colors";
import PageConainer from "layout/PageContainer";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ListProductSugest from "./components/ListProductSugest";
import ProductInfoBox from "./components/ProductInfoBox";
import ProviderLine from "./components/ProviderLine";

const useStyle = makeStyles({
  content: {
    backgroundColor: "#f1f5f9",
    fontFamily: "Varela Round",
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
const desc =
  "<p>Táo Envy New Zealand - loại táo ngon nhất thế giới</p><p>Táo màu đỏ, vỏ mỏng bóng, chắc thịt, ăn giòn, vị ngọt đậm.</p><p>Rất giàu vitamin A, C, D, E, B, magie, sắt, canxi, kẽm, đồng, magan, axit amin, đường, chất xơ.</p><p>Phù hợp để ăn trực tiếp hoặc làm những món ăn tráng miệng như nước ép, bánh,</p><p>Táo Envy New Zealand nổi tiếng với hình dáng quả tròn, màu đỏ, vỏ mỏng bóng, chắc thịt, ăn giòn, vị ngọt đậm. Táo Envy rất giàu vitamin A, vitamin C, vitamin D, vitamin E, vitamin B, magie, sắt, canxi, kẽm, đồng, magan, axit amin, đường, chất xơ,… có nhiều công dụng kỳ diệu đối với sức khỏe.</p>";

const ProductDetail: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyle();
  return (
    <PageConainer classContent={classes.content}>
      <Container style={{ paddingTop: 24 }}>
        <Box className={classes.items}>
          <Box className={classes.box}>
            <ProductInfoBox />
          </Box>
          <Box className={classes.box}>
            <ProviderLine />
          </Box>
          <Box className={classes.box}>
            <Typography variant="h6" color="textPrimary">
              Các sản phẩm khác của cửa hàng
            </Typography>
            <ListProductSugest />
          </Box>
          <Box className={classes.box}>
            <Typography variant="h6" color="textPrimary">
              Chi tiết sản phẩm
            </Typography>
            <Typography variant="body2">
              <Box dangerouslySetInnerHTML={{ __html: desc }} />
            </Typography>
          </Box>
        </Box>
      </Container>
    </PageConainer>
  );
};

export default withRouter(ProductDetail);
