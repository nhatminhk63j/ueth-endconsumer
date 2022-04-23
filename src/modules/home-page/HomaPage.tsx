import Banner from "components/Banner";
import { useCatergory } from "hooks/useCategory";
import { defaultProducts, useProduct, useProducts } from "hooks/useProducts";
import PageConainer from "layout/PageContainer";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useQueryParams, NumberParam, StringParam } from "use-query-params";
import OneRowListCategory from "./components/OneRowListCategory";
import OneRowListProduct from "./components/OneRowListProduct";

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
  for (let index = 0; index < 3; index++) {
    categories = categories.concat(categories);
  }
  const products = defaultProducts;

  return (
    <PageConainer headerProps={{ noColor: true }}>
      <Banner img="https://storage.googleapis.com/vntravel/fresh/img/457900jfV/banner-freeship.jpg" />
      <OneRowListCategory title="Danh mục sản phẩm" categories={categories} />
      <OneRowListProduct title="Khuyến mại" products={products} />
      <Banner img="https://storage.googleapis.com/vntravel/fresh/img/457900jfV/banner-freeship.jpg" />
      <OneRowListProduct title="Gần tôi" products={products} />
    </PageConainer>
  );
};

export default withRouter(HomaPage);
