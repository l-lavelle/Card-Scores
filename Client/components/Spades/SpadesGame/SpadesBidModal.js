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
import BouncyCheckbox from "react-native-bouncy-checkbox";

export function SpadesBidModal(props) {
  const saveBid = async (value) => {
    console.log("hi");
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("teamData", jsonValue);
    } catch (e) {
      console.log(e);
      // saving error
    }
  };

  const madeBid = async (value) => {
    if (value === "team1") {
      let add1Score = bid.team1bid * 10 + props.team1Score;
      if (bid.team1null) {
        add1Score = 100 + add1Score;
      }
      props.update1Score(add1Score);
    } else {
      let add2Score = bid.team2bid * 10 + props.team2Score;
      if (bid.team2null) {
        add2Score = 100 + add2Score;
      }
      props.update2Score(add2Score);
    }
  };

  const lostBid = async () => {
    console.log("hi");
  };

  // Set state for the counters and pass down
  const [bid, setBid] = useState({
    team1bid: 0,
    team2bid: 0,
    team1null: false,
    team2null: false,
  });
  const update1Bid = (bidData) => setBid({ ...bid, ["team1bid"]: bidData });
  const update2Bid = (bidData) => setBid({ ...bid, ["team2bid"]: bidData });

  return (
    <Modal {...props} animationType="slide" presentationStyle="pageSheet">
      <View>
        <MaterialIcons name="close" size={50} onPress={props.onHide} />
        <Counter teamBid={bid.team1bid} onUpdate={update1Bid} />
        <BouncyCheckbox
          style={{ marginTop: 16 }}
          textStyle={{
            textDecorationLine: "none",
          }}
          isChecked={bid.team1null}
          text="Null"
          disableBuiltInState
          onPress={() => setBid({ ...bid, ["team1null"]: !bid.team1null })}
        />
        <Pressable onPress={() => madeBid("team1")} style={{ marginTop: 16 }}>
          <Text>made bid</Text>
        </Pressable>
        <Pressable onPress={lostBid} style={{ marginTop: 16 }}>
          <Text>Didnt make</Text>
        </Pressable>
        <Counter teamBid={bid.team2bid} onUpdate={update2Bid} />
        <BouncyCheckbox
          style={{ marginTop: 16 }}
          textStyle={{
            textDecorationLine: "none",
          }}
          isChecked={bid.team2null}
          text="Null"
          disableBuiltInState
          onPress={() => setBid({ ...bid, ["team2null"]: !bid.team2null })}
        />
        <Pressable onPress={() => madeBid("team2")} style={{ marginTop: 16 }}>
          <Text>made bid</Text>
        </Pressable>
        <Pressable onPress={lostBid} style={{ marginTop: 16 }}>
          <Text>Didnt make</Text>
        </Pressable>
      </View>
      <View></View>
    </Modal>
  );
}
