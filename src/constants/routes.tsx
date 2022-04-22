import { HomePage } from 'app/pages/HomePage/Loadable';
import { LoginPage } from 'app/pages/LoginPage/Loadable';
import { ProductPage } from 'app/pages/ProductPage/Loadable';

export const routes = {
  LOGIN: '/login',
  SIGNUP: '/signup',
  PRODUCT: '/product',
  ORDER: '/order',
  HOMEPAGE: '/',
};

export const pages = [
  {
    route: routes.LOGIN,
    component: LoginPage,
  },
  {
    route: routes.PRODUCT,
    component: ProductPage,
  },
  {
    route: routes.HOMEPAGE,
    component: HomePage,
  },
];
