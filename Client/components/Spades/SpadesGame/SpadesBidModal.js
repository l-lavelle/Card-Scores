// trying to get and save the bids in state
// counter passed down but will not increment/decremnet with
// not having any luck so far
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
  Pressable,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SpadesStyles } from "./SpadesGameStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { Counter } from "../SpadesCounter/Counter";
import { Child } from "../Child";

export function SpadesBidModal(props) {
  //   const [modalOpen, setModalOpen] = useState(false);
  const [counter, setCounter] = useState({ one: 0, two: 3 });

  const addOne = async (value) => {
    if (value < 13) {
      setCounter(value + 1);
    }
  };

  const subtractOne = async () => {
    if (counter >= 1) {
      setCounter(counter - 1);
    }
  };

  const saveBid = async (value) => {
    console.log("hi");
    // try {
    //   const jsonValue = JSON.stringify(value);
    //   await AsyncStorage.setItem("teamData", jsonValue);
    // } catch (e) {
    //   console.log(e);
    //   // saving error
    // }
  };
  const [bid, setBid] = useState({ team1bid: 0, team2bid: 0 });

  const [data, setData] = useState("hi");
  /** State Handler */
  const onChildPress = (childData) => setData(childData);

  return (
    <Modal {...props} animationType="slide" presentationStyle="pageSheet">
      <View>
        <MaterialIcons name="close" size={50} onPress={props.onHide} />
        <Counter />
        <Counter />
        <Pressable onPress={saveBid}>
          <Text>Save Bid</Text>
        </Pressable>
        <Text>ji</Text>
        <Text>{`Parent data: ${data}`}</Text>
        <Child onUpdate={onChildPress} />
      </View>
      <View></View>
    </Modal>
  );
}
