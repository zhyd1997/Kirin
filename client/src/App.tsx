import React from "react";

import { Home } from "@/components/Home";

import { ProvideAuth } from "./hooks";

export function App() {
  return (
    <ProvideAuth>
      <Home />
    </ProvideAuth>
  );
}
