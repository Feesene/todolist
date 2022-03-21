import React, { ReactNode } from "react";
import { StyleSheet, View, Image } from "react-native";
import { useSelect } from "../../hooks/UseSelect";
import { Button } from "../Button";

interface InterfaceToolbar {
  onClick?: (value: string) => void;
  children?: ReactNode;
}

export const Toolbar = ({ onClick, children }: InterfaceToolbar) => {
  const { Select, changeStateSelect } = useSelect();
  return (
    <View onTouchEnd={() => onClick} style={[styles().container]}>
      <Button size={90}>
        <View style={styles().images}>
          <View
            onTouchEnd={() => {
              changeStateSelect(1);
            }}
            style={styles().icon}
          >
            <Image
              style={{
                width: 35,
                height: 35,
                alignSelf: "center",
              }}
              resizeMode={"contain"}
              source={
                Select === 1
                  ? require("../../../assets/comprasc.png")
                  : require("../../../assets/compras.png")
              }
            ></Image>
          </View>
          <View
            onTouchEnd={() => {
              changeStateSelect(2);
            }}
            style={styles().icon}
          >
            <Image
              style={{
                width: 30,
                height: 30,
                alignSelf: "center",
              }}
              resizeMode={"contain"}
              source={
                Select === 2
                  ? require("../../../assets/lugaresc.png")
                  : require("../../../assets/lugar.png")
              }
            ></Image>
          </View>
          <View
            onTouchEnd={() => {
              changeStateSelect(3);
            }}
            style={styles().icon}
          >
            <Image
              style={{
                width: 30,
                height: 30,
                alignSelf: "center",
              }}
              resizeMode={"contain"}
              source={
                Select === 3
                  ? require("../../../assets/metasc.png")
                  : require("../../../assets/metas.png")
              }
            ></Image>
          </View>
          <View
            onTouchEnd={() => {
              changeStateSelect(4);
            }}
            style={styles().icon}
          >
            <Image
              style={{
                width: 30,
                height: 30,
                alignSelf: "center",
              }}
              resizeMode={"contain"}
              source={
                Select === 4
                  ? require("../../../assets/tarefasc.png")
                  : require("../../../assets/tarefa.png")
              }
            ></Image>
          </View>
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
    },
  });
