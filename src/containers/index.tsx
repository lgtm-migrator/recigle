import React, { FC } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import GoogleAnalytics from "components/templates/GoogleAnalytics";
import Layout from "components/templates/Layout";
import Pages from "./pages";
import ReactGA from "react-ga";

const init = (options = {}) => {
  const isGAEnabled = process.env.NODE_ENV === "production";

  if (isGAEnabled) {
    ReactGA.initialize("UA-59624553-7");
  }

  return isGAEnabled;
};

const Containers: FC = () => (
  <Layout>
    <Router>
      {init() && <Route component={GoogleAnalytics} />}
      <Switch>
        <Route exact={true} path="/">
          <Pages />
        </Route>
      </Switch>
    </Router>
  </Layout>
);

export default Containers;
