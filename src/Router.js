import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ROUTES } from "./routes";

import { Home } from "@/scenes";

export const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path={ROUTES.HOME} exact component={Home} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
