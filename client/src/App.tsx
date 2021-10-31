import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { Home } from "@/components/Home";
import { Login } from "@/components/LogIn";
import { Register } from "@/components/Register";
import { SignOut } from "@/components/SignOut";
import { useAuth } from "@/hooks/useAuth";
import { PrivateRoute } from "@/routes/PrivateRoute";

export function App() {
  const auth = useAuth();

  return (
    <div>
      <Router>
        <div>
          {auth.isAuthenticated && <SignOut />}

          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/editor">Editor</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/editor">Editor</PrivateRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
