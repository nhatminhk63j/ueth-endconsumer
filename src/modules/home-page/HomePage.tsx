import { Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Banner from "components/Banner";
import { useCatergory } from "hooks/useCategory";
import { defaultProducts } from "hooks/useProducts";
import PageConainer from "layout/PageContainer";
import DividerListProduct from "modules/common/DividerListProduct";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import OneRowListCategory from "./components/OneRowListCategory";
import OneRowListProduct from "./components/OneRowListProduct";
import { Link } from "react-router-dom";
const HomaPage: React.FC<RouteComponentProps> = ({ history }) => {
  let categories = useCatergory();
  // const [query] = useQueryParams({
  //   page: NumberParam,
  //   pageSize: NumberParam,
  //   q: StringParam,
  //   orderBy: StringParam,
  //   sortBy: StringParam,
  //   status: StringParam,
  // });
  // const [{ loading, products, total }] = useProducts({
  //   ...{ page: 1, pageSize: 2 },
  //   ...query,
  // } as GETProductsRequest);
  // console.log(products)

  const products = defaultProducts;

  return (
    <PageConainer headerProps={{ noColor: true }}>
      <Banner
        img="https://storage.googleapis.com/vntravel/fresh/img/457900jfV/banner-freeship.jpg"
        offset={-100}
      />
      <OneRowListCategory title="Danh mục sản phẩm" categories={categories} />
      <OneRowListProduct title="Khuyến mại" products={products} />
      <DividerListProduct url="/khuyen-mai" text="Xem thêm"/>
      <Banner img="https://storage.googleapis.com/vntravel/fresh/img/457900jfV/banner-freeship.jpg" />
      <OneRowListProduct title="Gần tôi" products={products} />
      <DividerListProduct url="/gan-day" text="Xem thêm"/>
    </PageConainer>
  );
};

export default withRouter(HomaPage);
