import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { WithLayoutRoute } from "./routers";
import { PublicLayout, SecondaryPublicLayout } from "./layouts";

// const LandingPage = lazy(() => import("./pages/LandingPage"));

import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TearmsAndConditions from "./pages/TearmsAndConditions";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <WithLayoutRoute
          exact
          path="/"
          layout={PublicLayout}
          component={Home}
        />
        <WithLayoutRoute
          exact
          path="/about"
          layout={PublicLayout}
          component={About}
        />
        <WithLayoutRoute
          exact
          path="/pricing"
          layout={PublicLayout}
          component={Pricing}
        />
        <WithLayoutRoute
          exact
          path="/contact"
          layout={PublicLayout}
          component={ContactUs}
        />
        <WithLayoutRoute
          exact
          path="/privacy-policy"
          layout={PublicLayout}
          component={PrivacyPolicy}
        />
        <WithLayoutRoute
          exact
          path="/terms-and-conditions"
          layout={PublicLayout}
          component={TearmsAndConditions}
        />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </Router>
  );
};

export default Routes;
