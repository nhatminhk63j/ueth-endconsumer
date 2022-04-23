import { useState } from "react";
import { makeError } from "utils/helpers/api";
import { API, useAPI } from "./useAPI";
import { useUpload } from "./useUpload";

export const useProducts = (query?: GETProductsRequest) => {
  const { data, loading, error } = useAPI<GetProductsResponse>(
    "provider/products",
    {
      ...query,
    }
  );

  return [
    {
      ...data,
      products: data?.products || [],
      loading,
      error: makeError(error),
    },
    {},
  ] as const;
};

export const useProduct = (id?: string) => {
  const { uploadImage } = useUpload();
  const { loading, data, error, mutate } = useAPI<GetProductDetail>(
    id && `/provider/products/${id}`
  );

  const [effect, setEffect] = useState<EffectState>({});

  const create = async (product: CreateProductRequest) => {
    try {
      setEffect({ loading: true });
      const avatar = await uploadImage(product.avatar || "");
      const res = await API.POST("provider/products", {
        ...product,
        avatar: avatar,
      });
      setEffect({});
      mutate(res, { revalidate: false });
      return res;
    } catch (e) {
      setEffect({ error: makeError(e) });
      throw e;
    }
  };

  return [
    { effect, loading, ...data, error: makeError(error) },
    { create, update: create },
  ] as const;
};

export const defaultProducts: Product[] = [
  {
    id: "product-ca-chua",
    avatar:
      "https://cdn-crownx.winmart.vn/images/prod/162427541254510054693-KG-Rau-ngut.jpg",
    name: "Rau bắp cải xanh",
    description: "Ca chua duoc trong tu nhien, 100% huu co, khong chat phu gia",
    quantityOfStock: 100,
    price: 100000,
    unit: "kg",
    status: "APPROVED",
    category: {
      id: "ca-11",
      name: "Rau,Cu,Qua",
    },
    provider: {
      id: "12",
      address: "Ha Noi",
      name: "Nguyen van A",
      avatar:
        "https://storage.googleapis.com/public-tripi/fresh/img/455080aGecuu/nem-tom-hum.jpg?w=640&q=75",
    },
    createAt: "",
  },
  {
    id: "product-ca-chua",
    avatar:
      "https://bizweb.dktcdn.net/thumb/grande/100/091/032/products/artboard-6-100.jpg",
    name: "Cá hồi Chile",
    description: "Ca chua duoc trong tu nhien, 100% huu co, khong chat phu gia",
    quantityOfStock: 100,
    price: 100000,
    unit: "kg",
    status: "PENDING",
    category: {
      id: "ca-11",
      name: "Rau,Cu,Qua",
    },
    provider: {
      id: "12",
      address: "Ha Noi",
      name: "Nguyen van A",
      avatar:
        "https://storage.googleapis.com/public-tripi/fresh/img/455080aGecuu/nem-tom-hum.jpg?w=640&q=75",
    },
    createAt: "",
  },
  {
    id: "product-ca-chua",
    avatar:
      "https://classicdeli.vn/danang/3456-large_default/le-traiteur-c-ga-khong-xong-co-da-dong-lanh.jpg",
    name: "Ức gà đông lạnh",
    description: "Ca chua duoc trong tu nhien, 100% huu co, khong chat phu gia",
    quantityOfStock: 100,
    price: 100000,
    unit: "kg",
    status: "PENDING",
    category: {
      id: "ca-11",
      name: "Rau,Cu,Qua",
    },
    provider: {
      id: "12",
      address: "Ha Noi",
      name: "Nguyen van A",
      avatar:
        "https://storage.googleapis.com/public-tripi/fresh/img/455080aGecuu/nem-tom-hum.jpg?w=640&q=75",
    },
    createAt: "",
  },
  {
    id: "product-ca-chua",
    avatar:
      "https://thuonghieugao.com/image/sanpham/gao-hai-hau/1/images/san-pham/gao-tam-hai-hau.png",
    name: "Gạo tám Hải Hậu  ",
    description: "Ca chua duoc trong tu nhien, 100% huu co, khong chat phu gia",
    quantityOfStock: 100,
    price: 100000,
    unit: "kg",
    status: "APPROVED",
    category: {
      id: "ca-11",
      name: "Rau,Cu,Qua",
    },
    provider: {
      id: "12",
      address: "Ha Noi",
      name: "Nguyen van A",
      avatar:
        "https://storage.googleapis.com/public-tripi/fresh/img/455080aGecuu/nem-tom-hum.jpg?w=640&q=75",
    },
    createAt: "",
  },
  {
    id: "product-ca-chua",
    avatar:
      "https://cdn-crownx.winmart.vn/images/prod/162985899484210628789.jpg",
    name: "Cam vàng ruột Úc (bán lẻ từ 1kg)",
    description: "Ca chua duoc trong tu nhien, 100% huu co, khong chat phu gia",
    quantityOfStock: 100,
    price: 100000,
    unit: "kg",
    status: "APPROVED",
    category: {
      id: "ca-11",
      name: "Rau,Cu,Qua",
    },
    provider: {
      id: "12",
      address: "Ha Noi",
      name: "Nguyen van A",
      avatar:
        "https://storage.googleapis.com/public-tripi/fresh/img/455080aGecuu/nem-tom-hum.jpg?w=640&q=75",
    },
    createAt: "",
  },
  {
    id: "product-ca-chua",
    avatar:
      "https://storage.googleapis.com/public-tripi/fresh/img/455080aGecuu/nem-tom-hum.jpg?w=640&q=75",
    name: "Đậu hà lan",
    description: "Ca chua duoc trong tu nhien, 100% huu co, khong chat phu gia",
    quantityOfStock: 100,
    price: 100000,
    unit: "kg",
    status: "APPROVED",
    category: {
      id: "ca-11",
      name: "Rau,Cu,Qua",
    },
    provider: {
      id: "12",
      address: "Ha Noi",
      name: "Nguyen van A",
      avatar:
        "https://storage.googleapis.com/public-tripi/fresh/img/455080aGecuu/nem-tom-hum.jpg?w=640&q=75",
    },
    createAt: "",
  },
  {
    id: "product-ca-chua",
    avatar:
      "https://cdn-crownx.winmart.vn/images/prod/162427343928010054623-KG-Su-su-qua-DL-L1-MT.jpg",
    name: "[Thực phẩm sạch] Su hào xanh",
    description: "Ca chua duoc trong tu nhien, 100% huu co, khong chat phu gia",
    quantityOfStock: 100,
    price: 100000,
    unit: "kg",
    status: "APPROVED",
    category: {
      id: "ca-11",
      name: "Rau,Cu,Qua",
    },
    provider: {
      id: "12",
      address: "Ha Noi",
      name: "Nguyen van A",
      avatar:
        "https://storage.googleapis.com/public-tripi/fresh/img/455080aGecuu/nem-tom-hum.jpg?w=640&q=75",
    },
    createAt: "",
  },
];
