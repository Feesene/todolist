import React, { Children, ReactNode } from "react";
import { KeyboardType, StyleSheet, View, Text } from "react-native";

import { colors } from "../../colors";

interface InterfaceButton {
  onClick?: () => void;
  size?: number;
  children?: ReactNode;
  iconLeft?: {
    name: string;
    type: string;
    size?: number;
    onPress?: () => void;
  };
}

export const Button = ({
  onClick,
  iconLeft,
  children,
  size = 70,
}: InterfaceButton) => {
  return (
    <View onTouchEnd={onClick} style={[styles(size).container, styles().elevation]}>
      {children}
    </View>
  );
};

const styles = (size?: number) =>
  StyleSheet.create({
    container: {
      height: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: `${size}%`,
      padding: 3,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { height: 2, width: 1 },
      shadowOpacity: 1,
      shadowRadius: 3,
      backgroundColor: colors.Light100,
    },
    elevation: {
      elevation: 15,
      shadowOpacity: 1,
      shadowColor: "#323232",
    },
  });
