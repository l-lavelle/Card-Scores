// Navigation button not working
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { SpadesWinStyles } from "./SpadesWinnerStyles";
export function SpadesWinner(props, { navigation }) {
  console.log("all props", props);
  console.log("narrow", props.route.params.team);
  return (
    <>
      <View>
        <Text>{props.route.params.team}</Text>
        <Text>Won!!</Text>
        <Pressable
          style={SpadesWinStyles.rerouteBtn}
          //   onPress={() => navigation.navigate("SpadesGame")}
        >
          <Text style={SpadesWinStyles.rerouteBtnText}>Play Again</Text>
        </Pressable>
        <Pressable
          style={SpadesWinStyles.rerouteBtn}
          //   onPress={() => props.navigation.navigate("HomeScreen")}
        >
          <Text style={SpadesWinStyles.rerouteBtnText}>Home</Text>
        </Pressable>
      </View>
    </>
  );
}
