import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SpadesStyles } from "./SpadesGameStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { SpadesBidModal } from "./SpadesBidModal";

export function SpadesGame({ navigation }) {
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
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(true);
  };

  const [team1Score, setTeam1score] = useState(0);
  const [team2Score, setTeam2score] = useState(0);
  const updateScore1 = (score) => setTeam1score(score);
  const updateScore2 = (score) => setTeam2score(score);
  if (team1Score > 500) {
    console.log(599);
    navigation.navigate("SpadesWinner", {
      team: data.team1Name,
    });
  }
  return (
    <>
      <View style={SpadesStyles.container}>
        <SpadesBidModal
          team1Score={team1Score}
          team2Score={team2Score}
          update1Score={updateScore1}
          update2Score={updateScore2}
          team1Name={data.team1Name}
          team2Name={data.team2Name}
          show={modalOpen}
          onHide={() => setModalOpen(false)}
          visible={modalOpen}
        />

        <Text style={SpadesStyles.spadesTitle}>Spades Score</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SpadesRules")}>
          <View style={SpadesStyles.rulesContainer}>
            <Text style={SpadesStyles.rulesText}>Rules</Text>
            <MaterialIcons name="info" size={35} />
          </View>
        </TouchableOpacity>
        <View style={SpadesStyles.spadesTeamConatiner}>
          <Text style={SpadesStyles.TeamName}>{data.team1Name}</Text>
          <View style={SpadesStyles.spadesPlayerName}>
            <Text>{data.player1}</Text>
            <Text>{data.player2}</Text>
          </View>
          <Text style={SpadesStyles.score}>Score: {team1Score}</Text>
        </View>
        <View style={SpadesStyles.spadesTeamConatiner}>
          <Text style={SpadesStyles.TeamName}>{data.team2Name}</Text>
          <Text>{data.player3}</Text>
          <Text>{data.player4}</Text>
          <Text style={SpadesStyles.score}>Score: {team2Score}</Text>
        </View>

        <Pressable style={SpadesStyles.bidBtn} onPress={toggleModal}>
          <Text style={SpadesStyles.bidBtnText}>Bid</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    </>
  );
}
