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

  // useEffect(() => {
  //   console.log("score from main page", scores.team1Score);
  // }, [scores]);

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

  // const storeScore = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem("teamScores", jsonValue);
  //   } catch (e) {
  //     console.log(e);
  //     // saving error
  //   }
  // };

  const [data, setData] = useState({});
  // const [scores, setScores] = useState({ team1Score: 0, team2Score: 0 });

  const [modalOpen, setModalOpen] = useState(false);
  // const updateScore1 = (score) =>
  //   setScores({ ...scores, ["team1Score"]: score });
  // const updateScore2 = (score) =>
  //   setScores({ ...scores, ["team2Score"]: score });

  const toggleModal = () => {
    setModalOpen(true);
  };

  const [team1Score, setTeam1score] = useState(0);
  const [team2Score, setTeam2score] = useState(0);
  const updateScore1 = (score) => setTeam1score(score);
  const updateScore2 = (score) => setTeam2score(score);

  return (
    <>
      <View style={SpadesStyles.container}>
        {/* <SpadesBidModal
          team1Score={scores.team1Score}
          team2Score={scores.team2Score}
          update1Score={updateScore1}
          update2Score={updateScore2}
          show={modalOpen}
          onHide={() => setModalOpen(false)}
          visible={modalOpen}
        /> */}

        <SpadesBidModal
          team1Score={team1Score}
          team2Score={team2Score}
          update1Score={updateScore1}
          update2Score={updateScore2}
          show={modalOpen}
          onHide={() => setModalOpen(false)}
          visible={modalOpen}
        />

        <Text style={SpadesStyles.spadesTitle}>Spades Score</Text>
        <View style={SpadesStyles.spadesTeamConatiner}>
          <Text style={SpadesStyles.TeamName}>{data.team1Name}</Text>
          <View style={SpadesStyles.spadesPlayerName}>
            <Text>{data.player1}</Text>
            <Text>{data.player2}</Text>
          </View>
          <Text>Score: {team1Score}</Text>
          <Text>Bid:</Text>
        </View>
        <View style={SpadesStyles.spadesTeamConatiner}>
          <Text>{data.team2Name}</Text>
          <Text>{data.player3}</Text>
          <Text>{data.player4}</Text>
          <Text>Score: {team2Score}</Text>
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
