import React, { useState } from "react";
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
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("my-key");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  return (
    <View>
      <View>
        <Text>Spades</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
