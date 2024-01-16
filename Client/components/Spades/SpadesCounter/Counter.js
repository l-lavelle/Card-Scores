// Save
import React, { useState } from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const addOne = async () => {
    if (counter < 13) {
      setCounter(counter + 1);
    }
  };

  const subtractOne = async () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <View>
      <MaterialIcons name="add" size={50} onPress={addOne} onHold={addOne} />
      <Text>{counter}</Text>
      <MaterialIcons name="remove" size={50} onPress={subtractOne} />
    </View>
  );
}
