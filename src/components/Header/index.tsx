import React, { Children, ReactNode } from "react";
import { KeyboardType, StyleSheet, View, Text, Image } from "react-native";

import { colors } from "../../colors";
import { useSelect } from "../../hooks/UseSelect";
import { CircleButton } from "../CircleButton";

interface InterfaceHeader {
  onClickHistory?: () => void;
  onClickAdd?: () => void;
  children?: ReactNode;
}

export const Header = ({
  children,
  onClickHistory,
}: InterfaceHeader) => {
  const { Select, changeStateSelect } = useSelect();
  return (
    <View style={[styles().container]}>
      <View
        onTouchEnd={() => {
          changeStateSelect(0);
        }}
      >
        <Image
          style={{ width: 30, height: 30, alignSelf: "center" }}
          resizeMode={"contain"}
          source={require("../../../assets/back.png")}
        ></Image>
      </View>
      {children}
     
      <View onTouchEnd={onClickHistory}>
        <Image
          style={{ width: 40, height: 40, alignSelf: "center" }}
          resizeMode={"contain"}
          source={require("../../../assets/history.png")}
        ></Image>
      </View>
    
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
    },
  });
