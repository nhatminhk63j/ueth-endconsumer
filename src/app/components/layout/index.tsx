import { PageWrapper } from 'common/elements';
import { pages } from 'constants/routes';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
export const Layout = () => {
  return (
    <React.Fragment>
      <PageWrapper>
        <Header />
        <Switch>
          {pages.map((page, i) => {
            if (page.route) {
              return (
                <Route
                  exact
                  path={page.route}
                  component={page.component}
                  key={page.route}
                />
              );
            }
            return null;
          })}
        </Switch>
      </PageWrapper>
    </React.Fragment>
  );
};
