import React from "react";
import {  StyleSheet, View, Image, Text } from "react-native";

import { Button } from "../../components/Button";
import { colors } from "../../colors";
import { useSelect } from "../../hooks/UseSelect";

import { NativeBaseProvider, Box ,Icon } from "native-base";

export const Menu = () => {
  const { changeStateSelect } = useSelect();
  return (
    <View style={[styles().container]}>
      <View style={styles().image}>
        <Image
          style={{ width: "100%", height: "100%", alignSelf: "center" }}
          resizeMode={"contain"}
          source={require("../../../assets/logo.png")}
        ></Image>
      </View>
      <Button
        size={70}
        onClick={() => {
          changeStateSelect(1);
        }}
      >
        <View style={styles().button}>
          <Image
            style={{ width: 40, height: 40, alignSelf: "center" }}
            resizeMode={"contain"}
            source={require("../../../assets/compras.png")}
          ></Image>
          <Text style={[styles().text]}>Compras</Text>
        </View>
      </Button>
      <Button size={70} onClick={() => changeStateSelect(2)}>
        <View style={styles().button}>
          <Image
            style={{ width: 35, height: 35, alignSelf: "center" }}
            resizeMode={"contain"}
            source={require("../../../assets/lugar.png")}
          ></Image>
          <Text style={[styles().text]}>Lugares</Text>
        </View>
      </Button>
      <Button size={70} onClick={() => changeStateSelect(3)}>
        <View style={styles().button}>
          <Image
            style={{ width: 30, height: 30, alignSelf: "center" }}
            resizeMode={"contain"}
            source={require("../../../assets/metas.png")}
          ></Image>
          <Text style={[styles().text]}>Metas</Text>
        </View>
      </Button>
      <Button size={70} onClick={() => changeStateSelect(4)}>
        <View style={styles().button}>
          <Image
            style={{ width: 30, height: 30, alignSelf: "center" }}
            resizeMode={"contain"}
            source={require("../../../assets/tarefa.png")}
          ></Image>
          <Text style={[styles().text]}>Tarefas</Text>
        </View>
      </Button>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      width: "100%",
      height: "100%",
      backgroundColor: colors.Light100,
    },
    text: {
      fontSize: 20,
      color: "#00000060",
      width: "60%",
      marginLeft: 30,
    },
    button: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 25,
    },
    image: {
      height: "25%",
      width: "100%",
      backgroundColor: colors.Light100,
    },
  });
