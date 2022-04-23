import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { WHITE } from "assets/theme/colors";
import PageConainer from "layout/PageContainer";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
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
    marginBottom: 30,
  },
});

const ProductDetail: React.FC<RouteComponentProps> = ({ history }) => {
  const classes = useStyle();
  return (
    <PageConainer classContent={classes.content}>
      <Container style={{ paddingTop: 24 }}>
        <Box className={classes.box}>
          <ProductInfoBox />
        </Box>
        <Box className={classes.box}>
          <ProviderLine />
        </Box>
      </Container>
    </PageConainer>
  );
};

export default withRouter(ProductDetail);
