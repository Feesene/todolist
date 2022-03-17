import React, { Children, ReactNode } from "react";
import { KeyboardType, StyleSheet, View, Text, Image } from "react-native";

import { colors } from "../../colors";
import { Item } from "../../components/Item";
import { Toolbar } from "../../components/Toolbar";
import { Header } from "../../components/Header";
import { CircleButton } from "../../components/CircleButton";
import { useSelect } from "../../hooks/UseSelect";
import { InterfaceService } from "../../interfaces/InterfaceService";
import axios from "axios";
import { InputText } from "../../components/InputText";
import { requestsService } from "../../service/servicos";

export const Compras = () => {
  const lugar = "compras";
  const { changeStateSelect } = useSelect();
  const [select, changeSelect] = React.useState<InterfaceService[]>([]);
  const [enter, Onenter] = React.useState<boolean>(false);
  const [circleCheck, changeCircleCheck] = React.useState<boolean>(false);
  const [showAdd, setShowAdd] = React.useState(false);
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");

  React.useEffect(() => {
    if (enter === false) {
      const set = async () => {
        const resp = await axios.get(`http://192.168.15.37:3001/${lugar}/`);
        if (resp.status === 200) {
          let array: InterfaceService[] = resp.data;
          array.map((e) => {
            e.checked = false;
          });
          changeSelect(array);
          Onenter(true);
        }
      };
      set();
    }
  }, []);

  const updateList = () => {
    const set = async () => {
      const resp = await axios.get(`http://192.168.15.37:3001/${lugar}/`);
      if (resp.status === 200) {
        let array: InterfaceService[] = resp.data;
        array.map((e) => {
          e.checked = false;
        });
        changeSelect(array);
      }
    };
    set();
    changeCircleCheck(false);
  };

  React.useEffect(() => {
    const found = select.find((e) => e.checked === true);
    if (found) {
      changeCircleCheck(true);
    } else {
      changeCircleCheck(false);
    }
  }, [select]);

  const checkClick = (e: InterfaceService) => {
    let array: InterfaceService[] = select;
    const newArray = array.map((fe) => {
      if (e.id === fe.id) {
        fe.checked = !e.checked;
      }
      return fe;
    });
    changeSelect(newArray);
  };

  const circleCheckFunction = () => {
    select.map((e) => {
      if (e.checked === true) {
        requestsService(
          "PUT",
          {
            id: e.id,
            name: e.name,
            number: e.name,
            status: 1,
          },
          lugar,
          changeSelect,
          e.id
        );
      }
    });
    updateList();
  };

  const circleMoreFunction = () => {
    setShowAdd(true);
  };

  const circleCancelFunction = () => {
    setShowAdd(false);
  };

  const submitNewList = () => {
    if (input1 === "") return false;
    if (input2 === "") return false;
    requestsService(
      "post",
      {
        name: input1,
        number: input2,
        status: 0,
      },
      lugar,
      changeSelect,
      ""
    );
    setInput2("")
    setInput1("")

    updateList();


  };

  return (
    <View style={[styles().container]}>
      <View style={[styles().header]}>
        <Header>
          <CircleButton
            onClick={
              circleCheck
                ? circleCheckFunction
                : showAdd
                ? circleCancelFunction
                : circleMoreFunction
            }
            state={circleCheck ? "check" : showAdd ? "cancel" : "more"}
          ></CircleButton>
        </Header>
      </View>
      <View style={[styles().list]}>
        {showAdd && (
          <InputText
            item={input1}
            quant={input2}
            onChange1={(input) => setInput1(input)}
            onChange2={(input) => setInput2(input)}
            placeHolder={"Item"}
            required={true}
            onClickButton={submitNewList}
          ></InputText>
        )}
        {select &&
          select.map((e) => {
            if (e.status === 0)
              return (
                <View key={e.id} style={styles().margin}>
                  <Item
                    onClickCheck={() => checkClick(e)}
                    selected={e.checked}
                    key={e.id}
                    name={e.name}
                    quant={e.number}
                  ></Item>
                </View>
              );
          })}
      </View>
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
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "column",
      height: "65%",
      width: "100%",
      zIndex: 0,
    },

    toolbar: {
      display: "flex",
      zIndex: 1,
      justifyContent: "space-around",
      alignItems: "center",
      flexDirection: "row",
      height: "15%",
      width: "100%",
      backgroundColor: "#EEEEEE",
    },
    margin: {
      marginBottom: 20,
    },
  });
