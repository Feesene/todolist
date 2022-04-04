import React from "react";

interface ILoadingContextData {
  loading: boolean;
  changeStateLoading: (value: boolean) => void;
}

const LoadingContext = React.createContext<ILoadingContextData>({} as ILoadingContextData);

export const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const changeStateLoading = (isLoading: boolean) => {
    setLoading(isLoading);
  };

  return <LoadingContext.Provider value={{ loading, changeStateLoading }}>{children}</LoadingContext.Provider>;
};

export const useLoading = (): ILoadingContextData => {
  const context = React.useContext(LoadingContext);

  if (!context) throw new Error("useLoading must be used within an LoadingProvider");

  return context;
};