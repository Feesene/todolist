import React, { Children, ReactNode } from "react";
import { KeyboardType, StyleSheet, View, Text, Image } from "react-native";

import { colors } from "../../colors";
import { useSelect } from "../../hooks/UseSelect";
import { Toolbar } from "../../components/Toolbar";
import { Header } from "../../components/Header";
import { InputText } from "../../components/InputText";
import { CircleButton } from "../../components/CircleButton";

interface InterfaceLugares {}

export const Lugares = ({}: InterfaceLugares) => {
  const { changeStateSelect } = useSelect();
  const [showAdd, setShowAdd] = React.useState(false);
  return (
    <View style={[styles().container]}>
      <View style={[styles(showAdd).header]}>
        <Header>

          <CircleButton onClick={()=>{
            setShowAdd(!showAdd)
          }} state={showAdd ? "cancel" : "more" }></CircleButton>
        </Header>
        {showAdd && <InputText></InputText>}
      </View>
      <View style={[styles(showAdd).list]}></View>
      {!showAdd && (
        <View style={[styles().toolbar]}>
          <Toolbar></Toolbar>
        </View>
      )}
    </View>
  );
};

const styles = (showAdd?: boolean) =>
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
      flexDirection: "column",
      height: showAdd ? "45%" : "15%",
      width: "100%",
    },
    list: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
      height: showAdd ? "55%" : "65%",
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
