// GET /products
type GETProductsRequest = {
  limit: number;
  skip?: number;
  keyword?: number;
};
type GetProductsResponse = {
  page: number;
  pageSize: number;
  products: Product[];
};
// POST /product
type CreateProductRequest = Pick<
  Product,
  | 'name'
  | 'avatar'
  | 'categoryId'
  | 'description'
  | 'price'
  | 'unit'
  | 'quantityOfStock'
  | 'weight'
  | 'length'
  | 'height'
>;
type CreateProductResponse = Product;

// GET /products/:id

type GetProductDetail = Product;

// PUT /product
type UpdateProductRequest = Omit<
  Partial<Product>,
  'createAt' | 'status' | 'updateAt' | 'deleteAt'
>;

// POST /admin.pending-product/:id/approve

// GET /orders

type GetOdersRequesst = { limit: number; skip?: number; keyword?: number };

type GetOrdersResponse = {
  stats: {
    total;
  };
  orders: Omit<Order, 'contactId' | 'userId'>[];
};

// GET Provider

type GetProvidersRequest = {
  limit: number;
  skip: number;
  keyword: number;
};

type ProviderDetail = Provider & {
  star: number;
  categories?: Category[];
};
type GetProvidersResponse = {
  stats: {
    total: number;
  };
  providers?: ProviderDetail[];
};

// Get provider/:id

type GetDetailProviderResponse = Provider & { categories: Category[] };

// Get provider/:id/products
type GetProviderProductsRequest = {
  limit: number;
  skip: number;
  keyword: number;
};
type GetProviderProductResponse = {
  stats: {
    total: number;
  };
  providers?: ProviderDetail[];
};

// GET /customers

type GetCustomersRequest = {
  limit: number;
  skip: number;
  keyword: number;
};

type GetCustomersResponse = {
  stats: {
    total: number;
  };
  customers: Customer[];
};

// GET /customers/:id
type GetDetailCustomerResponse = Customer;

// GET /customers/:id/orders
type GetCustomerOrdersRequest = {
  limit: number;
  skip: number;
  keyword: number;
};
type GetCustomerOrdersResponse = {
  stats: {
    total: number;
  };
  orders?: Order[];
};
