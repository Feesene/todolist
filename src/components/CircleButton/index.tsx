import React, { Children, ReactNode } from "react";
import { KeyboardType, StyleSheet, View, Text, Image } from "react-native";

import { colors } from "../../colors";

interface InterfaceCircleButton {
  onClick?: () => void;
  state?: "more" | "cancel" | "check";
  children?: ReactNode;
}

export const CircleButton = ({
  onClick,
  state = "more",
  children,
}: InterfaceCircleButton) => {

  return (
    <View onTouchEnd={onClick} style={[styles().container, styles().elevation]}>
      {state === "more" && (
        <View
          style={styles().clickButton}
        >
          <Image
            style={{ width: 30, height: 30, alignSelf: "center" }}
            resizeMode={"contain"}
            source={require("../../../assets/more.png")}
          ></Image>
        </View>
      )}
      {state === "cancel" && (
        <View style={styles().clickButton} >
          <Image
            style={{ width: 25, height: 25, alignSelf: "center" }}
            resizeMode={"contain"}
            source={require("../../../assets/cancel.png")}
          ></Image>
        </View>
      )}
      {state === "check" && (
        <Image
          style={{ width: 30, height: 30, alignSelf: "center" }}
          resizeMode={"contain"}
          source={require("../../../assets/Check.png")}
        ></Image>
      )}
      {children}
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      height: 80,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 80,
      padding: 3,
      borderRadius: 1000,
      shadowColor: "#000",
      shadowOffset: { height: 2, width: 1 },
      shadowOpacity: 1,
      shadowRadius: 3,
      backgroundColor: colors.Light100,
    },
    clickButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      backgroundColor:"#32323200"
    },
    elevation: {
      elevation: 15,
      shadowOpacity: 1,
      shadowColor: "#323232",
    },
  });
