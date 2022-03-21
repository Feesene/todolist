import { StyleSheet, View } from "react-native";
import { Menu } from "../../pages/Menu";
import { List } from "../List";
import React from "react";
import { useSelect } from "../../hooks/UseSelect";
import { NativeBaseProvider } from "native-base";

const Principal = () => {
  const { Select } = useSelect();

  return (
    
      <View style={styles.container}>
        {Select === undefined && <Menu></Menu>}
        {Select === 0 && <Menu></Menu>}
        {Select === 1 && <List place="compras"></List>}
        {Select === 2 && <List place="lugares"></List>}
        {Select === 3 && <List place="metas"></List>}
        {Select === 4 && <List place="tarefas"></List>}
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Principal;
