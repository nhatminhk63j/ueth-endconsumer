import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Add, Remove } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { TrashIcon } from "assets/icons";
import { BACK_GROUND } from "assets/theme/colors";
import TableCustom, { Column } from "modules/common/TableCustom";
import ProductCart from "modules/product-detail/components/ProductCart";
import React from "react";
import { FormattedNumber } from "react-intl";

interface ListProductInCartProps {
  items?: CartItem[];
  loading?: boolean;
}

const useStyle = makeStyles({
  btn_circle: {
    boxShadow: "none",
    backgroundColor: BACK_GROUND,
    marginRight: 2,
    marginLeft: 2,
    padding: 2,
    width: 30,
    height: 30,
  },
});

export const ListProductInCart: React.FC<ListProductInCartProps> = ({
  items,
  loading,
}) => {
  const classes = useStyle();
  const columns = React.useMemo(() => {
    // STT, avatar + tên, số điện thoại, email, địa chỉ hiện tại, ngày tham gia, trạng thái, số đơn hàng
    const baseColumns: (Column<CartItem> & { index: number })[] = [
      {
        index: 0,
        title: <Checkbox />,
        width: 40,
        styleHeader: { maxWidth: "40px" },
        render: (record: some, index: number) => {
          return <Checkbox />;
        },
      },
      {
        index: 1,
        title: "Sản phẩm",
        width: 500,
        render: (record, index: number) => {
          return <ProductCart {...record.product} />;
        },
      },
      {
        index: 1,
        title: "Đơn giá",
        render: (record, index: number) => {
          return (
            <Typography color="textPrimary">
              <FormattedNumber value={record.product.price || 0} />đ
            </Typography>
          );
        },
      },
      {
        index: 2,
        title: "Số lượng",
        render: (record, index: number) => {
          return (
            <Grid container alignItems="center">
              <Button variant="contained" className={classes.btn_circle}>
                <Remove />
              </Button>
              <Typography style={{ margin: "0 20px" }}>
                {record.quantity}
              </Typography>
              <Button variant="contained" className={classes.btn_circle}>
                <Add />
              </Button>
            </Grid>
          );
        },
      },
      {
        index: 7,
        title: "Thành tiền",
        render: (record, index: number) => {
          return (
            <Box style={{ display: "inline-block" }}>
              <Typography color="textPrimary">
                <FormattedNumber
                  value={record.product.price * record.quantity || 0}
                />
                đ
              </Typography>
            </Box>
          );
        },
      },
      {
        index: 8,
        title: "",
        render: (record, index: number) => {
          return (
            <IconButton>
              <TrashIcon />
            </IconButton>
          );
        },
      },
    ];

    let columns = [...baseColumns];

    return columns.filter((a) => a).sort((a, b) => a.index - b.index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <TableCustom
      loading={loading}
      dataSource={items}
      columns={columns}
      noColumnIndex
      onRowClick={(record: some, index: number) => {
        // onSelectItem && onSelectItem(record as any);
      }}
    />
  );
};
