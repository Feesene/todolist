import React from "react";
import { ActivityIndicator } from "react-native";

import { useLoading } from "../../hooks/Loading";
import { colors } from "../../colors";

export interface ILoading {
  status: boolean;
}

export const Loading = ({ status }: ILoading) => {
  const { loading } = useLoading();

  if (status)
    return (
      <ActivityIndicator
        size="large"
        color={colors.primary}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.Light100,
          opacity: 0.7,
          zIndex: 1,
        }}
      />
    );
  else return null;
};