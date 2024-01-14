import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SpadesStyles } from "./SpadesGameStyles";

export function SpadesGame() {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("teamData");
      console.log("json value", jsonValue);
      const trail = JSON.parse(jsonValue);
      console.log("parse this", trail.player1);
      setData(trail);
      // return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log(e);
      // error reading value
    }
  };

  const [data, setData] = useState({});
  const [scores, setScores] = useState({ team1Score: 0, team2Score: 0 });

  return (
    <>
      <Text>Spades Score</Text>
      {/* <ScrollView style={SpadesStyles.scroller}> */}
      <View styles={SpadesStyles.container}>
        <Text style={SpadesStyles.TeamName}>{data.team1Name}</Text>
        <Text>{data.player1}</Text>
        <Text>{data.player2}</Text>
        <Text>Score: {scores.team1Score}</Text>
        <Text>Bid:</Text>
      </View>

      {/* <Text>{data.team2Name}</Text>
      <Text>{data.player3}</Text>
      <Text>{data.player4}</Text>
      <Text>Score: {scores.team2Score}</Text>
      <Text>Bid:</Text>
      <StatusBar style="auto" /> */}
      {/* </ScrollView> */}
    </>
  );
}
