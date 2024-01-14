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
import { SpadesBidModal } from "./SpadesBidModal";
export function SpadesGame() {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("teamData");
      const trail = JSON.parse(jsonValue);
      setData(trail);
    } catch (e) {
      console.log(e);
      // error reading value
    }
  };

  const [data, setData] = useState({});
  const [scores, setScores] = useState({ team1Score: 0, team2Score: 0 });
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <View style={SpadesStyles.container}>
        <SpadesBidModal
          show={modalOpen}
          onHide={() => setModalOpen(false)}
          visible={modalOpen}
        />
        {/* <Modal
          visible={modalOpen}
          animationType="slide"
          presentationStyle="pageSheet"
        >
          <View>
            <Text>Modal Text</Text>
            <MaterialIcons
              name="close"
              size={50}
              onPress={() => setModalOpen(false)}
            />
          </View>
          <View></View>
        </Modal> */}

        <Text style={SpadesStyles.spadesTitle}>Spades Score</Text>
        <View style={SpadesStyles.spadesTeamConatiner}>
          <Text style={SpadesStyles.TeamName}>{data.team1Name}</Text>
          <View style={SpadesStyles.spadesPlayerName}>
            <Text>{data.player1}</Text>
            <Text>{data.player2}</Text>
          </View>
          <Text>Score: {scores.team1Score}</Text>
          <Text>Bid:</Text>
        </View>
        <View style={SpadesStyles.spadesTeamConatiner}>
          <Text>{data.team2Name}</Text>
          <Text>{data.player3}</Text>
          <Text>{data.player4}</Text>
          <Text>Score: {scores.team2Score}</Text>
          <Text>Bid:</Text>
        </View>
        <Pressable style={SpadesStyles.bidBtn} onPress={toggleModal}>
          <Text style={SpadesStyles.bidBtnText}>Bid</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    </>
  );
}
