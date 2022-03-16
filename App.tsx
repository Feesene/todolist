import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { AppProvider } from "./src/hooks";
import React from "react";
import Principal from "./src/pages/Principal";

const App = () => {
  return (
    <View style={styles.container}>
      <AppProvider>
        <Principal></Principal>
      </AppProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:"100%",
    height:"100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
