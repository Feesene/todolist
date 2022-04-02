import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Icon } from "native-base";
import { Button } from "../../components/Button";
import { colors } from "../../colors";
import { useSelect } from "../../hooks/UseSelect";
import { useFonts, Righteous_400Regular } from "@expo-google-fonts/righteous";
import AppLoading from "expo-app-loading";
import { AntDesign, FontAwesome , Entypo} from '@expo/vector-icons';

export const Menu = () => {
  const { changeStateSelect } = useSelect();
  let [fontsLoaded] = useFonts({
    Righteous_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
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
         <Icon color={"#32323280"} as={FontAwesome} name="shopping-cart" />

          <Text style={[styles().text]}>Compras</Text>
        </View>
      </Button>
      <Button size={70} onClick={() => changeStateSelect(2)}>
        <View style={styles().button}>
          <Icon color={"#32323280"} as={Entypo} name="location" />
          <Text style={[styles().text]}>Lugares</Text>
        </View>
      </Button>
      <Button size={70} onClick={() => changeStateSelect(3)}>
        <View style={styles().button}>
         
          <Icon style={{width:35}} color={"#32323280"} as={FontAwesome} name="line-chart" />
          
          <Text style={[styles().text]}>Metas</Text>
        </View>
      </Button>
      <Button size={70} onClick={() => changeStateSelect(4)}>
        <View style={styles().button}>
          <Icon color={"#32323280"} as={AntDesign} name="profile" />
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
      fontFamily: "Righteous_400Regular",
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
