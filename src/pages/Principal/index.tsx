import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../colors";
import { Menu } from "../../pages/Menu";
import { Compras } from "../../pages/Compras";
import { Lugares } from "../../pages/Lugares";
import { Tarefas } from "../../pages/Tarefas";
import { Metas } from "../../pages/Metas";
import React from "react";
import { useSelect } from "../../hooks/UseSelect";

const Principal = () => {
  const { Select } = useSelect();

//   React.useEffect(()=>{
//     if(first === false){
//       setFirst(true)
//       changeStateSelect(0)
//     }
//   },[])


  React.useEffect(()=>{
    // console.log(Select)
  },[Select])

  return (
    <View style={styles.container}>
        {Select === undefined && <Menu></Menu>}
        {Select === 0 && <Menu></Menu>}
        {Select === 1 && <Compras></Compras>}
        {Select === 2 && <Lugares></Lugares>}
        {Select === 3 && <Tarefas></Tarefas>}
        {Select === 4 && <Metas></Metas>}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    alignItems: "center",
    justifyContent: "center"
  },
});
export default Principal;
