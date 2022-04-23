import Banner from "components/Banner";
import { useCatergory } from "hooks/useCategory";
import { defaultProducts } from "hooks/useProducts";
import PageConainer from "layout/PageContainer";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
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

  const products = defaultProducts;

  return (
    <PageConainer headerProps={{ noColor: true }}>
      <Banner
        img="https://storage.googleapis.com/vntravel/fresh/img/457900jfV/banner-freeship.jpg"
        offset={-70}
      />
      <OneRowListCategory title="Danh mục sản phẩm" categories={categories} />
      <OneRowListProduct title="Khuyến mại" products={products} />
      <Banner img="https://storage.googleapis.com/vntravel/fresh/img/457900jfV/banner-freeship.jpg" />
      <OneRowListProduct title="Gần tôi" products={products} />
    </PageConainer>
  );
};

export default withRouter(HomaPage);
