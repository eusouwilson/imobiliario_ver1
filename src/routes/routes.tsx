import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "hooks/Auth";

export default function RouterWrapper({
  isPrivate = false,
  component: Component,
  ...rest
}: any) {
  const { signed } = useAuth();
  if (!signed) {
    if (isPrivate === true) {
      return <Redirect to="/login" exact={true} />;
    }
  }

  return <Route {...rest} component={Component} />;
}
