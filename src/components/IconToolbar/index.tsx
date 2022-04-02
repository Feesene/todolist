import React, { ReactNode } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  Text,
} from "react-native";
import colorsThemes from "../../colors/colors";
import { useSelect } from "../../hooks/UseSelect";
import AppLoading from "expo-app-loading";
import { useFonts, Righteous_400Regular } from "@expo-google-fonts/righteous";
import { Icon } from "native-base";

interface InterfaceIconToolbar {
  onClick?: () => void;
  children?: ReactNode;
  select: number;
  name?: string;
  nameIcon?: string;
  typeIcon?: any;
}

export const IconToolbar = ({
  onClick,
  children,
  select,
  name,
  nameIcon,
  typeIcon,
}: InterfaceIconToolbar) => {
  const { Select, changeStateSelect } = useSelect();

  let [fontsLoaded] = useFonts({
    Righteous_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View
      onTouchEnd={() => {
        changeStateSelect(select);
      }}
      onTouchEndCapture={onClick}
      style={styles().icon}
    >
      <View style={Select === select ? styles().selected : styles().unselected}>
        <Icon
          style={{ width: 35 }}
          color={Select === select ? "#fff" : "#32323280"}
          as={typeIcon}
          name={nameIcon}
        />

        {Select === select ? <Text style={styles().text}>{name}</Text> : null}
        {children}
      </View>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    icon: {
      width: "25%",
      display: "flex",
      alignItems: "center",
    },
    selected: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colorsThemes.primary,
      width: 60,
      height: 70,
      borderRadius: 10,
    },
    unselected: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontFamily: "Righteous_400Regular",
      marginTop: 1,
      color: "#eee",
      fontSize: 12,
    },
  });
