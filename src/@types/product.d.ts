interface Product extends BaseRepository {
  name: string;
  description?: string;
  price: number;
  orderCount?: number;
  quantityOfStock: number;
  categoryId?: number;
  avatar: string;
  unit: string;
  weight?: number;
  height?: number;
  length?: number;
  status: "PENDING" | "APPROVED" | "DISABLED";
  category?: ProductCategory;
  provider?: ProductProvider;
  display?: boolean;
  stoke?: number;
  desciprtion?: string;
}

type ProductCategory = Pick<Category, "name" | "id">;
type ProductProvider = Pick<Provider, "name" | "id" | "avatar" | "address">;
interface Category extends BaseRepository {
  name: string;
  avatar: string;
  level?: number;
  parentId?: string;
  children?: Category;
}
