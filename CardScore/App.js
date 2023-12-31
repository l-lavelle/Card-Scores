import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Card Scorer</Text>
        </View>
        {/* <View style={styles.container}>
          <Text>Card Scorer</Text>
          <Text>Hi my name is lauren</Text>
          <StatusBar style="auto" />
        </View> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    width: "100%",
  },
  header: {
    backgroundColor: "black",
    color: "white",
  },
});
