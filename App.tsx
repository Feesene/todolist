import { StyleSheet, View } from "react-native";
import { AppProvider } from "./src/hooks";
import React from "react";
import Principal from "./src/pages/Principal";
import { NativeBaseProvider } from "native-base";

const App = () => {

  return (
    <NativeBaseProvider>
      <AppProvider>
        <View style={styles.container}>
          <Principal></Principal>
        </View>
      </AppProvider>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
