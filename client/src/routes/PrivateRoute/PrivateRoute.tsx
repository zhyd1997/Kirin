import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";

export function PrivateRoute({ children, ...rest }: RouteProps) {
  const auth = useAuth();

  return (
    <Route
      {...rest}
      // eslint-disable-next-line no-confusing-arrow
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}
