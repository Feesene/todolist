import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  RefreshControl,
  Text,
} from "react-native";

import { colors } from "../../colors";
import { Item } from "../../components/Item";
import { Toolbar } from "../../components/Toolbar";
import { Header } from "../../components/Header";
import { CircleButton } from "../../components/CircleButton";
import { InterfaceService } from "../../interfaces/InterfaceService";
import axios from "axios";
import { InputText } from "../../components/InputText";
import { requestsService } from "../../service/servicos";
import { Box, useToast } from "native-base";

interface InterfaceList {
  place?: "compras" | "lugares" | "metas" | "tarefas";
}

export const List = ({ place }: InterfaceList) => {
  const [select, changeSelect] = React.useState<InterfaceService[]>([]);
  const [enter, Onenter] = React.useState<boolean>(false);
  const [circleCheck, changeCircleCheck] = React.useState<boolean>(false);
  const [showAdd, setShowAdd] = React.useState(false);
  const [showHistory, setShowHistory] = React.useState(false);
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");
  const toast = useToast();
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    if (enter === false) {
      const set = async () => {
        const resp = await axios.get(
          `http://192.168.15.37:3001/${place}/?_sort=id&_order=desc`
        );
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

  const refresh = async () => {
    setRefreshing(true);
    const resp = await axios.get(
      `http://192.168.15.37:3001/${place}/?_sort=id&_order=desc`
    );
    if (resp.status === 200) {
      let array: InterfaceService[] = resp.data;
      array.map((e) => {
        e.checked = false;
      });
      changeSelect(array);
    }

    setRefreshing(false);
  };

  const updateList = () => {
    const set = async () => {
      const resp = await axios.get(
        `http://192.168.15.37:3001/${place}/?_sort=id&_order=desc`
      );
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
            number: e.number,
            status: 1,
          },
          place,
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
    requestsService(
      "POST",
      {
        name: input1,
        number: input2,
        status: 0,
      },
      place,
      changeSelect,
      ""
    ).then(() => {
      toast.show({
        render: () => {
          return (
            <Box bg="emerald.500" px="10" py="1" rounded="sm" mb={4}>
              <Text style={{ color: "#fff" }}>{input1} adicionado !</Text>
            </Box>
          );
        },
      });
    })

    setInput2("");
    setInput1("");

    updateList();
  };

  return (
    <View style={[styles().container]}>
      <View style={[styles().header]}>
        <Header
          onClickHistory={() => {
            setShowHistory(!showHistory);
          }}
        >
          {showHistory === false && (
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
          )}
        </Header>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl
            colors={[colors.primary]}
            refreshing={refreshing}
            onRefresh={refresh}
          />
        }
      >
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
              if (e.status === 0 && showHistory === false)
                return (
                  <View key={e.id} style={styles().margin}>
                    <Item
                      showSelect={true}
                      onClickCheck={() => showAdd === false && checkClick(e)}
                      selected={e.checked}
                      key={e.id}
                      name={e.name}
                      quant={e.number}
                    ></Item>
                  </View>
                );
              else if (e.status === 1 && showHistory === true)
                return (
                  <View key={e.id} style={styles().margin}>
                    <Item
                      showSelect={false}
                      selected={e.checked}
                      key={e.id}
                      name={e.name}
                      quant={e.number}
                    ></Item>
                  </View>
                );
            })}
        </View>
      </ScrollView>
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
      marginTop: 30,
      height: "15%",
      width: "100%",
    },
    list: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "column",
      height: "100%",
      width: "100%",
      marginTop: 10,
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
