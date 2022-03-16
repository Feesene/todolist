import React from "react";
import { SelectProvider } from "./UseSelect";

export const AppProvider: React.FC = ({ children }) => (
  <SelectProvider>{children}</SelectProvider>
);
