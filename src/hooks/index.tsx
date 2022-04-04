import React from "react";
import { SelectProvider } from "./UseSelect";
import { LoadingProvider } from "./Loading";

export const AppProvider: React.FC = ({ children }) => (
  <LoadingProvider>
    <SelectProvider>{children}</SelectProvider>
  </LoadingProvider>
);
