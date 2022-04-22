import { ReactNode } from "react";
export interface routeProps {
  icon: ReactNode;
  name: string;
  route?: string;
  component?: ReactNode;
  roles?: string[];
}

export const roles = {
  ADMIN: "UAT-ADMIN",
  PROVIDER_OWNER: "UET_ HACKATHON _OWNER",
  PROVIDER_SALES: "UET_ HACKATHON _SALES",
};

export const routes = {
  LOGIN: "/login",
  NOT_FOUND: "/not-found",
  HOME: "/",
};

// left menu
export const MAIN_MENU: routeProps[] = [
  // {
  //   icon: <BagIcon />,
  //   name: "IDS_FRESH_PRODUCT",
  //   subMenu: [
  //     {
  //       name: "IDS_FRESH_PRODUCT_MANAGEMENT",
  //       route: routes.PRODUCT,
  //       component: ManageProducts,
  //       role: [roles.ADMIN],
  //     },
  //     {
  //       name: "IDS_FRESH_MY_PRODUCT",
  //       route: routes.MY_PRODUCT,
  //       component: MyProducts,
  //       role: [roles.PROVIDER_OWNER, roles.PROVIDER_SALES],
  //     },
  //     {
  //       name: "IDS_FRESH_PRODUCT_WAITING_APPROVE",
  //       route: routes.PRODUCT_WATING_APPROVE,
  //       component: ProductWaitingApprove,
  //       role: [roles.ADMIN],
  //     },
  //     {
  //       name: "IDS_FRESH_ADD_PRODUCT",
  //       route: routes.PRODUCT_CREATE,
  //       component: CreateProduct,
  //       role: [roles.PROVIDER_OWNER, roles.PROVIDER_SALES],
  //     },
  //   ],
  //   //
  // },
  // {
  //   icon: <OrderIcon />,
  //   name: "IDS_FRESH_ORDER",
  //   subMenu: [
  //     {
  //       name: "IDS_FRESH_THE_ORDER",
  //       route: routes.ORDER_MANAGE,
  //       component: ManageOrders,
  //     },
  //     {
  //       name: "IDS_FRESH_CUSTOMER_RESPONSE",
  //       route: routes.ORDER_VOTE,
  //       component: OrderCustomerResponses,
  //     },
  //   ],
  // },
  // {
  //   icon: <ShopIcon />,
  //   name: "IDS_FRESH_USER_MANAGER",
  //   subMenu: [
  //     {
  //       name: "IDS_FRESH_PROVIDER",
  //       route: routes.PROVIDER,
  //       component: ManageProviders,
  //     },
  //     {
  //       name: "IDS_FRESH_CUSTOMER",
  //       route: routes.CUSTOMER,
  //       component: ManageCustomers,
  //     },
  //   ],
  // },
  // {
  //   icon: <GroupOutlined style={{ fontSize: 22, color: "#6e6e6e" }} />,
  //   name: "ISD_FRESH_EMPLOYER",
  //   subMenu: [
  //     {
  //       name: "IDS_FRESH_EMPLOYER_MANAGEMENT",
  //       route: routes.EMPLOYER_MANAGE,
  //       component: Box,
  //     },
  //     {
  //       name: "IDS_FRESH_EMPLOYER_WAITING_APPOVE",
  //       route: routes.EMPLOYER_WATING_APPROVE,
  //       component: Box,
  //     },
  //   ],
  // },
  // {
  //   icon: <UserIcon />,
  //   name: "IDS_FRESH_ACCOUNT",
  //   subMenu: [
  //     {
  //       name: "IDS_INFORMATION",
  //       route: routes.ACCOUNT_INFO,
  //       component: Profile,
  //     },
  //   ],
  // },
];

// url hidden menu
