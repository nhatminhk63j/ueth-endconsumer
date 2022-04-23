import { Box, Grid, Radio, Typography } from "@material-ui/core";
import { BankingIcon, CODIcon, QRIcon } from "assets/icons";
import { GREY_300 } from "assets/theme/colors";
import React, { ReactNode } from "react";
import { FormattedNumber } from "react-intl";

interface PaymentMethodProps {
  type: Order["paymentMethod"];
  checked?: boolean;
}

export const paymentMethodInfo: Record<
  Order["paymentMethod"],
  { icon: ReactNode; name: string; fee: number }
> = {
  vnpayqr: {
    icon: <QRIcon style={{ width: 50, height: 30 }} />,
    name: "Thanh toán QR-PAY",
    fee: 125000,
  },
  banking: {
    icon: <BankingIcon style={{ width: 50, height: 40 }} />,
    name: "Thẻ ATM/Tài khoản ngân hàng",
    fee: 125680,
  },
  mastercard: {
    icon: <BankingIcon style={{ width: 50, height: 40 }} />,
    name: "Thẻ Visa, Master Card",
    fee: 586598,
  },
  code: {
    icon: <CODIcon style={{ width: 50, height: 40 }} />,
    name: "Thanh toán khi nhận hàng",
    fee: 0,
  },
};

const PaymentMethod: React.FC<PaymentMethodProps> = ({ type, checked }) => {
  return (
    <Grid
      container
      style={{
        padding: "8px 5px",
        border: `1px solid ${GREY_300} `,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: "center",
      }}
      justifyContent="space-between"
      wrap="nowrap"
    >
      <Grid container alignItems="center" wrap="nowrap">
        {paymentMethodInfo[type].icon}
        <Box style={{ marginLeft: 10 }}>
          <Typography>{paymentMethodInfo[type].name}</Typography>
          {paymentMethodInfo[type].fee > 0 && (
            <Typography variant="body1" color="textSecondary">
              Phí thanh toán: &nbsp;
              <FormattedNumber value={paymentMethodInfo[type].fee} />đ
            </Typography>
          )}
        </Box>
      </Grid>
      <Radio />
    </Grid>
  );
};

export default PaymentMethod;
