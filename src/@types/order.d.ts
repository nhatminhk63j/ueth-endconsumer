type OrderStatus = import("constants/constants").OrderStatus;

type UserOder = Pick<
  Customer,
  "id" | "avatar" | "name" | "email" | "phoneNumber"
>;

type OrderContact = Pick<
  CustomerContact,
  | "name"
  | "address"
  | "addressCode"
  | "lat"
  | "long"
  | "phoneNumber"
  | "addressName"
>;
type PaymentMethod = "code" | "banking" | "mastercard" | "vnpayqr";
type ProviderOrder = Pick<
  Provider,
  "id" | "address" | "name" | "contactPhoneNumber"
>;
interface Order extends BaseRepository {
  userId: string;
  contactId: string;
  products: OrderProduct[];
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  deliveryCode?: string;
  paymentStatus: "pending" | "done";
  paymentFee?: number;
  shipFee?: number;
  contact: OrderContact;
  user: UserOder;
  provider: ProviderOrder;
}

type ProductOder = Omit<
  Product,
  "address" | "status" | "category" | "provider" | "createAt"
>;

interface OrderProduct extends Omit<BaseRepository, "id"> {
  quantity?: number;
  product: ProductOder;
}
