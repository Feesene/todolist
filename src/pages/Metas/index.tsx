import React, { Children, ReactNode } from "react";
import {  StyleSheet, View, Image } from "react-native";
import { colors } from "../../colors";
import { useSelect } from "../../hooks/UseSelect";
import { Toolbar } from "../../components/Toolbar";

import { Header } from "../../components/Header";


interface InterfaceMetas {
  
}

export const Metas = ({}: InterfaceMetas) => {
  const {  changeStateSelect } = useSelect();
  return (
    <View style={[styles().container]}>
    <View style={[styles().header]}>
      <Header></Header>
    </View>
    <View style={[styles().list]}></View>
    <View style={[styles().toolbar]}>
      <Toolbar></Toolbar>
    </View>
  </View>
  );
};


const styles = () =>
  StyleSheet.create({
    container: {
      fontFamily: "Righteous",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      width: "100%",
      height: "100%",
      backgroundColor: colors.Light100,
    },
    header: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
      height: "15%",
      width: "100%",
    },
    list: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
      height: "65%",
      width: "100%",
    },

    toolbar: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
      height: "15%",
      width: "100%",
    },
  });
