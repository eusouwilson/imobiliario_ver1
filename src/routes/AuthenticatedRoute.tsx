import React from "react";
import { Switch } from "react-router-dom";
import {
  SignIn,
  CreatePerson,
  CreateBuilding,
  ListBuilding,
} from "../pages/public";
import CustomRoute from "./routes";
import ListPerson from "../pages/public/Person/List/index";

const AuthenticatedRoute: React.FC = () => {
  return (
    <Switch>
      <CustomRoute path="/" exact isPrivate component={ListPerson} />
      {/* Person routes */}
      <CustomRoute path="/person/create" isPrivate component={CreatePerson} />
      <CustomRoute
        path="/person/list"
        isPrivate={true}
        exact
        component={ListPerson}
      />

      {/* Bulding routes */}
      <CustomRoute
        path="/building/create"
        isPrivate
        component={CreateBuilding}
      />
      <CustomRoute
        path="/building/list"
        isPrivate={true}
        exact
        component={ListBuilding}
      />

      <CustomRoute path="/login" component={SignIn} />
    </Switch>
  );
};

export default AuthenticatedRoute;
