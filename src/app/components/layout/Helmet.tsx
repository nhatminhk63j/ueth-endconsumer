import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { routes } from 'constants/routes';

interface Props {}

const DefaultHelmet: React.FC<RouteComponentProps<any> & Props> = props => {
  const { pathname } = props?.location;

  const getTitle = () => {
    if (pathname === routes.LOGIN) return 'ABC | Đăng nhập';
    if (pathname === routes.PRODUCT)
      return 'MyFresh | Hệ thống quản lý bán hàng thực phẩm, tạp hoá';
    if (pathname === routes.PRODUCT) return 'MyFresh | Sản phẩm';
    if (pathname === routes.ORDER) return 'MyFresh | Đơn hàng';
    return 'Not found';
  };

  return (
    <Helmet>
      <title>{getTitle()}</title>
    </Helmet>
  );
};

export default withRouter(DefaultHelmet);
