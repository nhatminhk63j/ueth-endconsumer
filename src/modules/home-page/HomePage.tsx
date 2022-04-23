import Banner from "components/Banner";
import { useCatergory } from "hooks/useCategory";
import { useProducts } from "hooks/useProducts";
import PageConainer from "layout/PageContainer";
import DividerListProduct from "modules/common/DividerListProduct";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import OneRowListCategory from "./components/OneRowListCategory";
import OneRowListProduct from "./components/OneRowListProduct";
import { useQueryParams, NumberParam, StringParam } from "use-query-params";
const HomaPage: React.FC<RouteComponentProps> = ({}) => {
  let categories = useCatergory();
  const [query] = useQueryParams({
    page: NumberParam,
    pageSize: NumberParam,
    q: StringParam,
    orderBy: StringParam,
    sortBy: StringParam,
    status: StringParam,
  });
  const [{ products }] = useProducts({
    ...{ page: 1, pageSize: 2 },
    ...query,
  } as GETProductsRequest);
  // console.log(products)

  return (
    <PageConainer headerProps={{ noColor: true }}>
      <Banner
        img="https://storage.googleapis.com/vntravel/fresh/img/457900jfV/banner-freeship.jpg"
        offset={-100}
      />
      <OneRowListCategory title="Danh mục sản phẩm" categories={categories} />
      <OneRowListProduct title="Sản phẩm bán chạy nhất" products={products} />
      <DividerListProduct url="/products" text="Xem thêm" />
      <Banner img="https://lh3.googleusercontent.com/BNA6LAXy6tL2N_5H9PJ6uUQ5kSFul7wKpO7vqJFw3ZPSZ1CjTNFGhiQCAC1geEfUvm06_VL0dlK4ZNSj8DOkQm5XgoDbTKc=rw-w1920" />
      <OneRowListProduct title="Sản phầm gần bạn" products={products} />
      <DividerListProduct url="/products" text="Xem thêm" />
    </PageConainer>
  );
};

export default withRouter(HomaPage);
