import React, { ReactNode } from "react";
import { StyleSheet, View, Image } from "react-native";
import { Icon } from "native-base";
import { AntDesign, Entypo } from "@expo/vector-icons";

import { useSelect } from "../../hooks/UseSelect";

interface InterfaceHeader {
  onClickHistory?: () => void;
  children?: ReactNode;
  colorHistory?:string;
}

export const Header = ({ colorHistory,children, onClickHistory }: InterfaceHeader) => {
  const { Select, changeStateSelect } = useSelect();
  return (
    <View style={[styles().container]}>
      <View
        onTouchEnd={() => {
          changeStateSelect(0);
        }}
      >
        <Icon size={"12"}  color={"#32323280"} as={Entypo} name="chevron-left" />
      </View>
      {children}

      <View onTouchEnd={onClickHistory}>
        <Icon size={"10"}  color={colorHistory} as={AntDesign} name="clockcircleo" />
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
