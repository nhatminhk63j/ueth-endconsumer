import { defaultProducts } from "hooks/useProducts";
import ProductCard from "modules/home-page/components/ProductCard";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface ListProductSugestProps {
  products?: Product[];
}
const ListProductSugest: React.FC<ListProductSugestProps> = ({ products }) => {
  return (
    <Carousel responsive={responsive} autoPlay={false}>
      {defaultProducts.map((product) => (
        <ProductCard product={product} />
      ))}
    </Carousel>
  );
};

export default ListProductSugest;
