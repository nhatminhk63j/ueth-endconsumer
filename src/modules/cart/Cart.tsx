import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useCart } from "hooks/useCart";
import PageConainer from "layout/PageContainer";

import React, { useState } from "react";
import { FormattedNumber } from "react-intl";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ListProductInCart } from "./components/ListProductInCart";
import OrderPayment from "./OrdePayment";

const useStyle = makeStyles({
  content: {
    backgroundColor: "#f1f5f9",
    fontFamily: "Varela Round",
  },
  payment_box: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 20,
  },
});

const Cart: React.FC<RouteComponentProps> = () => {
  const classes = useStyle();
  const [{ cartItems }] = useCart();
  const [checkout, setCheckout] = useState(false);

  if (checkout) return <OrderPayment items={cartItems} />;

  return (
    <PageConainer classContent={classes.content}>
      <Container style={{ paddingTop: 40, paddingBottom: 30 }}>
        <Typography
          color="textPrimary"
          style={{ fontWeight: "bold", fontSize: 19, marginBottom: 30 }}
        >
          Giỏ hàng
        </Typography>
        <ListProductInCart items={cartItems} />
        <Grid container justifyContent="flex-end">
          <Box className={classes.payment_box}>
            <Grid container alignItems="baseline">
              <Typography>Tổng tiền:&nbsp;</Typography>
              <Typography color="secondary" variant="h5">
                <FormattedNumber value={190000} />đ
              </Typography>
            </Grid>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              style={{ padding: "10px 20px" }}
              onClick={() => setCheckout(true)}
            >
              Thanh toán
            </Button>
          </Box>
        </Grid>
      </Container>
    </PageConainer>
  );
};

export default withRouter(Cart);
