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
import { styles } from "./SpadesPlayersStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function SpadesPlayers(navigation) {
  const [teamData, onChangeTeamData] = React.useState({
    team1Name: "",
    player1: "",
    player2: "",
    team2Name: "",
    player3: "",
    player4: "",
  });
  const [elementVisible, setElementVisible] = useState(true);

  const storeAndChange = () => {
    console.log(teamData);
    setElementVisible(false);
  };

  const CreateTeams = () => {
    // console.log(teamData);
    storeData(teamData);
    // () => navigation.navigate("Home");
    getData();
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      console.log("storeData", jsonValue);
      await AsyncStorage.setItem("teamData", jsonValue);
    } catch (e) {
      console.log(e);
      // saving error
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("teamData");
      console.log(JSON.parse(jsonValue));
      // return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
  return (
    <View>
      <View>
        <Text>Choose Your Teams:</Text>
      </View>
      {elementVisible ? (
        <View style={styles.team1Container}>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={(newValue) =>
                onChangeTeamData({ ...teamData, ["team1Name"]: newValue })
              }
              value={teamData.team1Name}
              placeholder="Team 1 Name"
              keyboardType="default"
            />
          </SafeAreaView>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={(newValue) =>
                onChangeTeamData({ ...teamData, ["player1"]: newValue })
              }
              value={teamData.player1}
              placeholder="Player"
              keyboardType="default"
            />
          </SafeAreaView>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={(newValue) =>
                onChangeTeamData({ ...teamData, ["player2"]: newValue })
              }
              value={teamData.player2}
              placeholder="Player"
              keyboardType="default"
            />
          </SafeAreaView>
          <Button
            onPress={storeAndChange}
            title="Create Team 1"
            color="#841584"
            accessibilityLabel="Create Team 1"
          />
        </View>
      ) : (
        <View>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={(newValue) =>
                onChangeTeamData({ ...teamData, ["team2Name"]: newValue })
              }
              value={teamData.team2Name}
              placeholder="Team 2 Name"
              keyboardType="default"
            />
          </SafeAreaView>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={(newValue) =>
                onChangeTeamData({ ...teamData, ["player3"]: newValue })
              }
              value={teamData.player3}
              placeholder="Player"
              keyboardType="default"
            />
          </SafeAreaView>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              onChangeText={(newValue) =>
                onChangeTeamData({ ...teamData, ["player4"]: newValue })
              }
              value={teamData.player4}
              placeholder="Player"
              keyboardType="default"
            />
          </SafeAreaView>
          <Button
            onPress={CreateTeams}
            title="Create Team 1"
            color="#841584"
            accessibilityLabel="Create Team 2"
          />
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}
