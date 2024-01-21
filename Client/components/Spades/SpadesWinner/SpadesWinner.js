// Navigation button not working
import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import { SpadesWinStyles } from "./SpadesWinnerStyles";
import { useNavigation } from "@react-navigation/native";

export function SpadesWinner(props) {
  const navigation = useNavigation();

  return (
    <>
      <View style={SpadesWinStyles.winnerContainer}>
        <Text style={SpadesWinStyles.teamWonText}>
          {props.route.params.team} Won!
        </Text>
        <Pressable
          style={SpadesWinStyles.rerouteBtn}
          onPress={() => navigation.navigate("Spades Players")}
        >
          <Text style={SpadesWinStyles.rerouteBtnText}>Play Again</Text>
        </Pressable>
        <Pressable
          style={SpadesWinStyles.rerouteBtn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={SpadesWinStyles.rerouteBtnText}>Home</Text>
        </Pressable>
      </View>
    </>
  );
}
