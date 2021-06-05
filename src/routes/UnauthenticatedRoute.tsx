import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SignIn } from "../pages/public";

const UnauthenticatedRoute: React.FC = () => {
  return (
    <Switch>
      <Route path="/login">
        <SignIn />
      </Route>
    </Switch>
  );
};

export default UnauthenticatedRoute;
