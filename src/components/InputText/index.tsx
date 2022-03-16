import React from "react";
import { KeyboardType, StyleSheet, View, Text, Image } from "react-native";
import { Input } from "react-native-elements";
import { colors } from "../../colors";

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
  return (
    <View style={styles().container}>
      <View style={styles().input1}>
        <Input
          autoFocus={true}
          textAlign={"center"}
          onChangeText={onChange1}
          value={String(item)}
          inputStyle={{
            borderRadius: 5,
            backgroundColor: "#fff",
            marginTop: 20,
          }}
          placeholder={placeHolder}
        ></Input>
      </View>
      <View style={styles().input2}>
        <Input
          onChangeText={onChange2}
          textAlign={"center"}
          value={String(quant)}
          inputStyle={{
            borderRadius: 5,
            height: "10%",
            backgroundColor: "#fff",
            marginTop: 20,
          }}
        ></Input>
      </View>
      <View
        onTouchStart={() => {
          setState(true);
        }}
        onTouchEnd={() => {
          onClickButton;
          setState(false);
        }}
        style={styles(state).button}
      >
        <Text style={{ color: "#eee" }}>OK</Text>
      </View>
      <View></View>
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
      width: "70%",
      height: 70,
      marginTop:10,
      marginBottom:20,
      borderRadius: 80,
      borderStyle: "solid",
      borderColor: "#323232",
      borderWidth: 1,
    },
    input1: {
      marginTop: 5,
      marginLeft: 10,
      width: "50%",
      // backgroundColor:"#ff000030"
    },
    input2: {
      marginTop: 5,
      width: "20%",
      // backgroundColor: "#0000ff20",
    },
    button: {
      width: 60,
      height: 60,
      borderRadius: 80,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: state ? colors.primaryHover : colors.primary,
    },
  });
