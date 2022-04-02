import React, { ReactNode } from "react";
import { StyleSheet, View, Image } from "react-native";
import colorsThemes from "../../colors/colors";
import { useSelect } from "../../hooks/UseSelect";
import { Button } from "../Button";
import { IconToolbar } from "../IconToolbar";
import { AntDesign, FontAwesome , Entypo} from '@expo/vector-icons';
import { Icon } from "native-base";

interface InterfaceToolbar {
  onClick?: (value: string) => void;
  children?: ReactNode;
}

export const Toolbar = ({ onClick, children }: InterfaceToolbar) => {
  const { Select } = useSelect();
  return (
    <View
      onTouchEnd={() => onClick}
      style={[styles().container]}
    >
      <Button size={90}>
        <View style={[styles().images]}>
          <IconToolbar
            name="Compras"
            select={1}
            nameIcon={"shopping-cart"}
            typeIcon={FontAwesome}

          />
          <IconToolbar
            name="Lugares"
            select={2}
            nameIcon={"location"}  
            typeIcon={Entypo}
          />
          <IconToolbar
            name="Metas"
            select={3}
            nameIcon={"line-chart"}
            typeIcon={FontAwesome}
          />
          <IconToolbar
            name="Tarefas"
            select={4}
            nameIcon={"profile"}
            typeIcon={AntDesign}
          />
        </View>
      </Button>
      {children}
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    images: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    icon: {
      width: "25%",
      display: "flex",
      justifyContent: "center",
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
  });
