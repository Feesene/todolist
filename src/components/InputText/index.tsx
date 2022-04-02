import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Input } from "native-base";
//import { Input } from "react-native-elements";
import { colors } from "../../colors";

import AppLoading from "expo-app-loading";
import { useFonts, Righteous_400Regular } from "@expo-google-fonts/righteous";

interface IInputText {
  placeHolder?: string;
  required?: boolean;
  item?: string;
  quant?: string;
  onChange1?: (value: string) => void;
  onChange2?: (value: string) => void;
  onClickButton?: () => void;
}

export const InputText = ({
  onChange1,
  onChange2,
  onClickButton,
  placeHolder = "Item",
  item = "",
  quant = "",
}: IInputText) => {
  const [state, setState] = React.useState<boolean>(false);

  let [fontsLoaded] = useFonts({
    Righteous_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles().container}>
      <ImageBackground
        style={{
          width: "100%",
          height: "100%",
          alignSelf: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        resizeMode={"contain"}
        source={require("../../../assets/teste.png")}
      >
        <View style={styles().input1}>
          <Input
            bg={"#fff"}
            autoFocus={true}
            textAlign={"center"}
            onChangeText={onChange1}
            value={String(item)}
            fontSize="lg"
            height={10}
            marginTop={-1}
            marginLeft={2}
            placeholder={placeHolder}
          ></Input>
        </View>
        <View style={styles().input2}>
          <Input
            bg={"#fff"}
            marginTop={-1}
            onChangeText={onChange2}
            textAlign={"center"}
            value={String(quant)}
            height={10}
            marginLeft={1}
            width={60}
            fontSize="sm"
          ></Input>
        </View>
        <View
          onTouchStart={() => {
            setState(true);
          }}
          onTouchEndCapture={() => {
            setState(false);
          }}
          onTouchEnd={onClickButton}
          style={styles(state).button}
        >
          <Text
            style={{
              fontFamily: "Righteous_400Regular",

              color: "#eee",
              fontSize: 16,
            }}
          >
            OK
          </Text>
        </View>
        <View></View>
      </ImageBackground>
    </View>
  );
};

const styles = (state?: boolean) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "75%",
      height: 90,
      marginTop: 10,
      marginBottom: 20,
      borderRadius: 80,
      // borderStyle: "solid",
      // borderColor: "#323232",
      // borderWidth: 1,
    },
    input1: {
      marginTop: 5,
      marginLeft: 10,
      width: "50%",
      // backgroundColor:"#ff000030"
    },
    input2: {
      marginTop: 5,
      marginLeft: -5,
      width: "20%",
      // backgroundColor: "#0000ff20",
    },
    button: {
      width: 60,
      height: 60,
      borderRadius: 80,
      marginLeft: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: state ? colors.primaryHover : colors.primary,
    },
  });
