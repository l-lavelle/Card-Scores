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

  const newTam = "geroge";
  return (
    <View>
      <View>
        <Text>Spades</Text>
        <Text>{data.player1}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
