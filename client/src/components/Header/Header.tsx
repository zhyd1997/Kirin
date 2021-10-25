import React from "react";

import { SignIn } from "@/components/SignIn";
import { SignOut } from "@/components/SignOut";
import { SignUp } from "@/components/SignUp";

export const Header = () => (
  <div>
    <SignUp />
    <SignIn />
    <SignOut />
  </div>
);
