import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../hooks/Auth";

const PrivateRoute: React.FC<any> = ({ children, ...rest }) => {
  const { user } = useAuth();
  console.log(user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !!user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
