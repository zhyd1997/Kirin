import React from "react";
import { useHistory } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";

export const SignOut = () => {
  const auth = useAuth();
  const history = useHistory();

  const handleLogOut = () => {
    auth.signout(() => {
      history.push("/");
    });
  };

  return (
    <div>
      <button type="button" onClick={handleLogOut}>
        LogOut
      </button>
    </div>
  );
};
