import Banner from "components/Banner";
import PageConainer from "layout/PageContainer";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

const HomaPage: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <PageConainer headerProps={{ noColor: true }}>
      <Banner />
    </PageConainer>
  );
};

export default withRouter(HomaPage);
