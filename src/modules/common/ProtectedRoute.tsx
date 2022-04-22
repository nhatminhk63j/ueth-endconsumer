import React from "react";
import { Redirect, Route } from "react-router";
import { withRouter, RouteComponentProps } from "react-router-dom";

import { routes } from "constants/routes";
import { TOKEN } from "constants/constants";

interface Props {}

const ProtectedRoute: React.FC<RouteComponentProps<any> & Props> = (props) => {
  const { ...restProps } = props;
  if (localStorage.getItem(TOKEN)) {
    return <Route {...restProps} />;
  }
  return <Redirect to={{ pathname: routes.LOGIN }} />;
};

export default withRouter(ProtectedRoute);
