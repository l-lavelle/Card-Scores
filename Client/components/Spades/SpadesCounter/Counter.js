import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function Counter({ teamBid, onUpdate }) {
  // const addOne = async () => {
  //   if (counter < 13) {
  //     setCounter(counter + 1);
  //   }
  // };
  const addOne = async () => {
    if (teamBid < 13) {
      onUpdate(teamBid + 1);
    }
  };

  // const subtractOne = async () => {
  //   if (counter >= 1) {
  //     setCounter(counter - 1);
  //   }
  // };

  const subtractOne = async () => {
    if (teamBid >= 1) {
      onUpdate(teamBid - 1);
    }
  };

  return (
    <View>
      <MaterialIcons name="add" size={50} onPress={addOne} />
      <Text>{teamBid}</Text>
      <MaterialIcons name="remove" size={50} onPress={subtractOne} />
    </View>
  );
}
