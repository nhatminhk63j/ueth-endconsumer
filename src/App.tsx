import React from "react";
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import { connect } from "react-redux";
import "./App.scss";
import LoadingIcon from "modules/common/LoadingIcon";
import { routes } from "constants/routes";
import Login from "modules/login/Login";
import NotFound from "modules/system/NotFound";
import { AppState } from "modules/rootReducer";
import "react-perfect-scrollbar/dist/css/styles.css";
import HomaPage from "modules/home-page/HomaPage";
import ProductDetail from "modules/product-detail/ProductDetail";
import Cart from "modules/cart/Cart";

function mapStateToProps(state: AppState) {
  return {
    profile: state.system.profile,
    // chains: state.system.chains,
  };
}
interface Props extends ReturnType<typeof mapStateToProps> {}

const App: React.FC<RouteComponentProps<any> & Props> = (props) => {
  return (
    <>
      <React.Suspense fallback={<LoadingIcon />}>
        <Switch>
          <Route exact path={routes.LOGIN} component={Login} />
          <Route exact path={routes.NOT_FOUND} component={NotFound} />
          <Route exact path={"/"} component={HomaPage} />
          <Route exact path={"/product/:id"} component={ProductDetail} />
          <Route exact path={"/cart"} component={Cart} />
        </Switch>
      </React.Suspense>
    </>
  );
};

export default connect(mapStateToProps)(withRouter(App));
