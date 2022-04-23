import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PageContainer from "layout/PageContainer";
import { GREY_300, WHITE } from "assets/theme/colors";
import { EditIcon } from "assets/icons";
import PlaceShip from "modules/common/PlaceShip";
import DateShip from "modules/common/DateShip";
import { ListProductInCart } from "./components/ListProductInCart";
import PaymentMethod from "./components/PaymentMethod";

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
  box: {
    background: WHITE,
    padding: 35,
    borderRadius: 10,
    marginBottom: 20,
    boxShadow: "2px 2px 4px rgb(0 0 0 / 5%), -2px -2px 4px rgb(0 0 0 / 5%);",
  },
  title: {
    fontWeight: "bold",
  },
  info_bill: {
    display: "flex",
    flexWrap: "unset",
    justifyContent: "space-between",
    padding: "10px 0",
    borderBottom: `1px solid ${GREY_300}`,
  },
});

interface OrderCheckoutProps {
  items?: CartItem[];
}

const OrderPayment: React.FC<OrderCheckoutProps> = ({ items }) => {
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
        <Grid container alignItems="stretch" spacing={3}>
          <Grid item sm={12} md={7}>
            <Box className={classes.box}>
              <Typography className={classes.title}>
                Thông tin người nhận
              </Typography>
              <Grid
                container
                alignItems="flex-start"
                justifyContent="space-between"
              >
                <Box>
                  <Typography color="textSecondary" variant="body2">
                    Họ và tên
                  </Typography>
                  <Typography color="textPrimary" variant="body1">
                    Nguyễn Thái Tiệp
                  </Typography>
                </Box>
                <Box>
                  <Typography color="textSecondary" variant="body2">
                    Số điện thoại
                  </Typography>
                  <Typography color="textPrimary" variant="body1">
                    0819200620
                  </Typography>
                </Box>
                <IconButton>
                  <EditIcon />
                </IconButton>
              </Grid>
              <Box style={{ marginTop: 30 }}>
                <Typography variant="body2" style={{ marginBottom: 5 }}>
                  Vận chuyển tới
                </Typography>
                <PlaceShip />
              </Box>
              <Box style={{ marginTop: 30 }}>
                <Typography variant="body2" style={{ marginBottom: 5 }}>
                  Thời gian giao hàng
                </Typography>
                <DateShip />
              </Box>
            </Box>
            <Box>
              <ListProductInCart items={items} noEdit />
            </Box>
          </Grid>
          <Grid item sm={12} md={5}>
            <Box className={classes.box}>
              <Typography className={classes.title}>
                Phương thức thanh toán
              </Typography>
              <FormControl fullWidth>
                <RadioGroup defaultValue="female" name="radio-buttons-group">
                  <PaymentMethod type="vnpayqr" />
                  <PaymentMethod type="banking" />
                  <PaymentMethod type="mastercard" />
                  <PaymentMethod type="code" />
                </RadioGroup>
              </FormControl>
              <Divider style={{ marginTop: 15, marginBottom: 20 }} />
              <Typography className={classes.title}>Chi tiết giá</Typography>
              <Box className={classes.info_bill}>
                <Box style={{ display: "flex", alignItems: "baseline" }}>
                  <Typography color="error">2x</Typography> &nbsp; Sản phẩm
                </Box>
                <Typography>1,699,000 đ</Typography>
              </Box>
              <Box className={classes.info_bill}>
                <Typography>Phụ phí thanh toán</Typography>
                <Typography>125,676 đ</Typography>
              </Box>
              <Box className={classes.info_bill}>
                <Typography>Phí vận chuyển</Typography>
                <Typography>125,676 đ</Typography>
              </Box>
              <Box className={classes.info_bill}>
                <Typography>Tổng tiền</Typography>
                <Typography color="primary">21,071,676 đ</Typography>
              </Box>
              <Typography
                style={{ fontSize: 12, lineHeight: 1.5, margin: "10px 0" }}
              >
                Bằng cách nhấn nút Thanh toán, bạn đồng ý với Điều kiện và điều
                khoản của chúng tôi
              </Typography>
              <Button fullWidth color="secondary" variant="contained">
                Thanh toán
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </PageContainer>
  );
};

export default OrderPayment;
