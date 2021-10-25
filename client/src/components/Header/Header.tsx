import React from "react";

import { SignIn } from "@/components/SignIn";
import { SignUp } from "@/components/SignUp";

export const Header = () => (
  <div>
    <SignUp />
    <SignIn />
    <button type="button">SignOut</button>
  </div>
);
