import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PageContainer from "layout/PageContainer";

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

interface OrderCheckoutProps {}

const OrderPayment: React.FC<OrderCheckoutProps> = () => {
  const classes = useStyle();

  return (
    <PageContainer classContent={classes.content}>
      <Container style={{ paddingTop: 40, paddingBottom: 30 }}>
        <Typography
          color="textPrimary"
          style={{ fontWeight: "bold", fontSize: 19, marginBottom: 30 }}
        >
          Thanh toán đơn hàng
        </Typography>
      </Container>
    </PageContainer>
  );
};

export default OrderPayment;
