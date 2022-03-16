import React, { Children, ReactNode } from "react";
import { KeyboardType, StyleSheet, View, Text } from "react-native";

import { colors } from "../../colors";

interface InterfaceItem {
  onClick?: () => void;
  onClickCheck?: () => void;
  name?: string;
  quant?: string;
  selected?: boolean;
  children?: ReactNode;
}

export const Item = ({
  onClick,
  onClickCheck,
  name,
  quant,
  selected = false,
  children,
}: InterfaceItem) => {
  return (
    <View onTouchEnd={onClick} style={[styles().container, styles().elevation]}>
      <Text style={[styles().name]}>{name}</Text>
      <Text style={[styles().quant]}>{quant}</Text>
      <View onTouchEnd={onClickCheck} style={[styles().check]}>
        <View style={[styles(selected).circle]}>
          <View style={[styles(selected).point]}></View>
        </View>
      </View>
      {children}
    </View>
  );
};

const styles = (selected?: boolean) =>
  StyleSheet.create({
    container: {
      height: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      width: `70%`,
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
    name: {
      width: "60%",
      paddingLeft: 15,
    },
    quant: { width: "20%" },
    check: {
      
      width: "20%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    circle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 20,
      height: 20,
      borderWidth: 1,
      borderColor: selected ? colors.primary : "#323232",
      borderRadius: 80,
    },
    point: {
      width: 10,
      height: 10,
      backgroundColor: selected ? colors.primary : "#00000000",
      borderRadius: 80,
    },
  });
