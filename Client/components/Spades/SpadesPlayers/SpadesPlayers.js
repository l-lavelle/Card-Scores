import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, TextInput, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayersStyles } from "./SpadesPlayersStyles";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function SpadesPlayers({ navigation }) {
  const [teamData, onChangeTeamData] = React.useState({
    team1Name: "",
    player1: "",
    player2: "",
    team2Name: "",
    player3: "",
    player4: "",
  });
  const [elementVisible, setElementVisible] = useState(true);
  const [trail, setTrial] = useState(false);

  const storeAndChange = () => {
    console.log(teamData);
    setElementVisible(false);
  };

  const CreateTeams = () => {
    storeData(teamData);
    navigation.navigate("Spades");
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("teamData", jsonValue);
    } catch (e) {
      console.log(e);
      // saving error
    }
  };

  return (
    <View style={PlayersStyles.container}>
      <View>
        <Text style={PlayersStyles.teamsText}>Choose Your Teams:</Text>
      </View>
      {elementVisible ? (
        <View style={PlayersStyles.team1Container}>
          <SafeAreaView>
            <View
              style={
                trail === "true"
                  ? PlayersStyles.txtField
                  : PlayersStyles.txtFieldType
              }
            >
              <Pressable onPress={() => console.log("hi")}>
                <TextInput style={PlayersStyles.txtFieldInput}></TextInput>
              </Pressable>
              <Text style={PlayersStyles.txtFieldSpan}></Text>
              <Text style={PlayersStyles.txtFieldLabel}>Trial</Text>
            </View>

            <Text style={PlayersStyles.teamInputText}>Team 1 Name:</Text>
            <TextInput
              style={PlayersStyles.input}
              onChangeText={(newValue) =>
                onChangeTeamData({ ...teamData, ["team1Name"]: newValue })
              }
              value={teamData.team1Name}
              placeholder="Team 1 Name"
              keyboardType="default"
            />
          </SafeAreaView>
          <SafeAreaView>
            <Text style={PlayersStyles.teamInputText}>Player 1 Name:</Text>
            <TextInput
              style={PlayersStyles.input}
              onChangeText={(newValue) =>
                onChangeTeamData({ ...teamData, ["player1"]: newValue })
              }
              value={teamData.player1}
              placeholder="Player"
              keyboardType="default"
            />
          </SafeAreaView>
          <SafeAreaView>
            <Text style={PlayersStyles.teamInputText}>Player 2 Name:</Text>
            <TextInput
              style={PlayersStyles.input}
              onChangeText={(newValue) =>
                onChangeTeamData({ ...teamData, ["player2"]: newValue })
              }
              value={teamData.player2}
              placeholder="Player"
              keyboardType="default"
            />
            <Pressable
              style={PlayersStyles.createTeamBtn}
              onPress={storeAndChange}
            >
              <Text style={PlayersStyles.createTeamTxt}>Create Team 1</Text>
            </Pressable>
          </SafeAreaView>
        </View>
      ) : (
        <View style={PlayersStyles.team1Container}>
          <SafeAreaView>
            <Text style={PlayersStyles.teamInputText}>Team 2 Name:</Text>
            <TextInput
              style={PlayersStyles.input}
              onChangeText={(newValue) =>
                onChangeTeamData({ ...teamData, ["team2Name"]: newValue })
              }
              value={teamData.team2Name}
              placeholder="Team 2 Name"
              keyboardType="default"
            />
          </SafeAreaView>
          <SafeAreaView>
            <Text style={PlayersStyles.teamInputText}>Player 1 Name:</Text>
            <TextInput
              style={PlayersStyles.input}
              onChangeText={(newValue) =>
                onChangeTeamData({ ...teamData, ["player3"]: newValue })
              }
              value={teamData.player3}
              placeholder="Player"
              keyboardType="default"
            />
          </SafeAreaView>
          <SafeAreaView>
            <Text style={PlayersStyles.teamInputText}>Player 2 Name:</Text>
            <TextInput
              style={PlayersStyles.input}
              onChangeText={(newValue) =>
                onChangeTeamData({ ...teamData, ["player4"]: newValue })
              }
              value={teamData.player4}
              placeholder="Player"
              keyboardType="default"
            />
            <Pressable
              style={PlayersStyles.createTeamBtn}
              onPress={CreateTeams}
            >
              <Text style={PlayersStyles.createTeamTxt}>Create Team 2</Text>
            </Pressable>
          </SafeAreaView>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
