import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Icon } from "native-base";
import { Button } from "../../components/Button";
import { colors } from "../../colors";
import { useSelect } from "../../hooks/UseSelect";
import { useFonts, Righteous_400Regular } from "@expo-google-fonts/righteous";
import AppLoading from "expo-app-loading";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { InterfaceService } from "../../interfaces/InterfaceService";
import colorsThemes from "../../colors/colors";

export const Menu = () => {
  const { changeStateSelect } = useSelect();
  const [lenght1, setLenght1] = React.useState<number | undefined>(undefined);
  const [lenght2, setLenght2] = React.useState<number | undefined>(undefined);
  const [lenght3, setLenght3] = React.useState<number | undefined>(undefined);
  const [lenght4, setLenght4] = React.useState<number | undefined>(undefined);
  let [fontsLoaded] = useFonts({
    Righteous_400Regular,
  });

  //PEGAR LISTA DO CACHE
  const getData = async () => {
    const value1 = await AsyncStorage.getItem(`@comprasLenght`);
    const value2 = await AsyncStorage.getItem(`@lugaresLenght`);
    const value3 = await AsyncStorage.getItem(`@metasLenght`);
    const value4 = await AsyncStorage.getItem(`@tarefasLenght`);
    const resp1 = await axios.get(
      `http://192.168.15.37:3001/compras/?_sort=id&_order=desc`
    );
    const resp2 = await axios.get(
      `http://192.168.15.37:3001/lugares/?_sort=id&_order=desc`
    );
    const resp3 = await axios.get(
      `http://192.168.15.37:3001/metas/?_sort=id&_order=desc`
    );
    const resp4 = await axios.get(
      `http://192.168.15.37:3001/tarefas/?_sort=id&_order=desc`
    );

    if (resp1.status === 200) {
      setLenght1(resp1.data.length - Number(value1));
      setLenght2(resp2.data.length - Number(value2));
      setLenght3(resp3.data.length - Number(value3));
      setLenght4(resp4.data.length - Number(value4));
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

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
          {lenght1 !== 0 && lenght1 && (
            <Text style={[styles().notify]}>{lenght1}</Text>
          )}
        </View>
      </Button>
      <Button size={70} onClick={() => changeStateSelect(2)}>
        <View style={styles().button}>
          <Icon color={"#32323280"} as={Entypo} name="location" />
          <Text style={[styles().text]}>Lugares</Text>
          {lenght2 !== 0 && lenght2 && (
            <Text style={[styles().notify]}>{lenght2}</Text>
          )}
        </View>
      </Button>
      <Button size={70} onClick={() => changeStateSelect(3)}>
        <View style={styles().button}>
          <Icon
            style={{ width: 35 }}
            color={"#32323280"}
            as={FontAwesome}
            name="line-chart"
          />

          <Text style={[styles().text]}>Metas</Text>
          {lenght3 !== 0 && lenght3 && (
            <Text style={[styles().notify]}>{lenght3}</Text>
          )}
        </View>
      </Button>
      <Button size={70} onClick={() => changeStateSelect(4)}>
        <View style={styles().button}>
          <Icon color={"#32323280"} as={AntDesign} name="profile" />
          <Text style={[styles().text]}>Tarefas</Text>
          {lenght4 !== 0 && lenght4 && (
            <Text style={[styles().notify]}>{lenght4}</Text>
          )}
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
      width: "50%",
      marginLeft: 30,
      fontFamily: "Righteous_400Regular",
    },
    notify: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: 16,
      textAlign: "center",
      width: "10%",
      height: 22,
      color: "#FFF",
      backgroundColor: colorsThemes.primary,
      borderRadius: 50,
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
