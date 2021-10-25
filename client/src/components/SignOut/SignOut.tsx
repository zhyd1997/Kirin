import React from "react";

import { useAuth } from "@/hooks/useAuth";

export const SignOut = () => {
  const auth = useAuth();

  const logOut = () => {
    auth.signout();
  };

  return (
    <div>
      <button type="button" onClick={logOut}>
        LogOut
      </button>
    </div>
  );
};
