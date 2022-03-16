import React from "react";

interface ISelectContextData {
  Select: number;
  changeStateSelect: (value: number) => void;
}

const SelectContext = React.createContext<ISelectContextData>({} as ISelectContextData);

export const SelectProvider: React.FC = ({ children }) => {
  const [Select, setSelect] = React.useState<number>(0);

  const changeStateSelect = (isSelect: number) => {
    setSelect(isSelect);
  };

  return <SelectContext.Provider value={{ Select, changeStateSelect }}>{children}</SelectContext.Provider>;
};

export const useSelect = (): ISelectContextData => {
  const context = React.useContext(SelectContext);

  if (!context) throw new Error("useSelect must be used within an SelectProvider");

  return context;
};