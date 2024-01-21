import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { CounterStyles } from "./CounterStyles";

export function Counter({ teamBid, onUpdate }) {
  const addOne = async () => {
    if (teamBid < 13) {
      onUpdate(teamBid + 1);
    }
  };

  const subtractOne = async () => {
    if (teamBid >= 5) {
      onUpdate(teamBid - 1);
    }
  };

  return (
    <View style={CounterStyles.container}>
      <MaterialIcons name="add" size={40} onPress={addOne} />
      <Text style={CounterStyles.bidAmount}>{teamBid}</Text>
      <MaterialIcons name="remove" size={40} onPress={subtractOne} />
    </View>
  );
}
