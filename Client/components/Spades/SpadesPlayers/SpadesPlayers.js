// TODO: Validate text and max characters
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView, TextInput, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayersStyles } from "./SpadesPlayersStyles";

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
  const [inputColor, setInputColor] = useState({
    team: true,
    playerTop: true,
    playerBottom: true,
  });
  const [labelLift, setLabelLift] = useState({
    team: true,
    playerTop: true,
    playerBottom: true,
  });

  // Created three too many re-renders passing value through- look into
  const styleInputs = () => {
    setLabelLift({ ...labelLift, ["team"]: false });
    setInputColor({ ...inputColor, ["team"]: !inputColor.team });
  };

  const styleInputs1 = () => {
    setLabelLift({ ...labelLift, ["playerTop"]: false });
    setInputColor({ ...inputColor, ["playerTop"]: !inputColor.playerTop });
  };

  const styleInputs2 = () => {
    setLabelLift({ ...labelLift, ["playerBottom"]: false });
    setInputColor({
      ...inputColor,
      ["playerBottom"]: !inputColor.playerBottom,
    });
  };

  // Store team 1 in storage and switch to next view
  const storeAndChange = () => {
    setElementVisible(false);
    setLabelLift({
      team: true,
      playerTop: true,
      playerBottom: true,
    });
  };

  // Store team 2 data and navigate to next component
  const CreateTeams = () => {
    storeData(teamData);
    navigation.navigate("Spades");
  };

  // Store data in Async Storage
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
                inputColor.team
                  ? PlayersStyles.txtField
                  : PlayersStyles.txtFieldType
              }
            >
              <TextInput
                onFocus={styleInputs}
                onBlur={() =>
                  setInputColor({ ...inputColor, ["team"]: !inputColor.team })
                }
                style={PlayersStyles.txtFieldInput}
                onChangeText={(newValue) =>
                  onChangeTeamData({ ...teamData, ["team1Name"]: newValue })
                }
                value={teamData.team1Name}
              ></TextInput>
              <Text style={PlayersStyles.txtFieldSpan}></Text>
              <Text
                style={
                  labelLift.team
                    ? PlayersStyles.txtFieldLabel
                    : PlayersStyles.txtFieldLabelAbove
                }
              >
                Team 1 Name
              </Text>
            </View>
            <View
              style={
                inputColor.playerTop
                  ? PlayersStyles.txtField
                  : PlayersStyles.txtFieldType
              }
            >
              <TextInput
                onFocus={styleInputs1}
                onBlur={() =>
                  setInputColor({
                    ...inputColor,
                    ["playerTop"]: !inputColor.playerTop,
                  })
                }
                style={PlayersStyles.txtFieldInput}
                onChangeText={(newValue) =>
                  onChangeTeamData({ ...teamData, ["player1"]: newValue })
                }
                value={teamData.player1}
              ></TextInput>
              <Text style={PlayersStyles.txtFieldSpan}></Text>
              <Text
                style={
                  labelLift.playerTop
                    ? PlayersStyles.txtFieldLabel
                    : PlayersStyles.txtFieldLabelAbove
                }
              >
                Player 1
              </Text>
            </View>
            <View
              style={
                inputColor.playerBottom
                  ? PlayersStyles.txtField
                  : PlayersStyles.txtFieldType
              }
            >
              <TextInput
                onFocus={styleInputs2}
                onBlur={() =>
                  setInputColor({
                    ...inputColor,
                    ["playerBottom"]: !inputColor.playerBottom,
                  })
                }
                style={PlayersStyles.txtFieldInput}
                onChangeText={(newValue) =>
                  onChangeTeamData({ ...teamData, ["player2"]: newValue })
                }
                value={teamData.player2}
              ></TextInput>
              <Text style={PlayersStyles.txtFieldSpan}></Text>
              <Text
                style={
                  labelLift.playerBottom
                    ? PlayersStyles.txtFieldLabel
                    : PlayersStyles.txtFieldLabelAbove
                }
              >
                Player 2
              </Text>
            </View>
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
            <View
              style={
                inputColor.team
                  ? PlayersStyles.txtField
                  : PlayersStyles.txtFieldType
              }
            >
              <TextInput
                onFocus={styleInputs}
                onBlur={() =>
                  setInputColor({ ...inputColor, ["team"]: !inputColor.team })
                }
                style={PlayersStyles.txtFieldInput}
                onChangeText={(newValue) =>
                  onChangeTeamData({ ...teamData, ["team2Name"]: newValue })
                }
                value={teamData.team2Name}
              ></TextInput>
              <Text style={PlayersStyles.txtFieldSpan}></Text>
              <Text
                style={
                  labelLift.team
                    ? PlayersStyles.txtFieldLabel
                    : PlayersStyles.txtFieldLabelAbove
                }
              >
                Team 2 Name
              </Text>
            </View>
            <View
              style={
                inputColor.playerTop
                  ? PlayersStyles.txtField
                  : PlayersStyles.txtFieldType
              }
            >
              <TextInput
                onFocus={styleInputs1}
                onBlur={() =>
                  setInputColor({
                    ...inputColor,
                    ["playerTop"]: !inputColor.playerTop,
                  })
                }
                style={PlayersStyles.txtFieldInput}
                onChangeText={(newValue) =>
                  onChangeTeamData({ ...teamData, ["player3"]: newValue })
                }
                value={teamData.player3}
              ></TextInput>
              <Text style={PlayersStyles.txtFieldSpan}></Text>
              <Text
                style={
                  labelLift.playerTop
                    ? PlayersStyles.txtFieldLabel
                    : PlayersStyles.txtFieldLabelAbove
                }
              >
                Player 1
              </Text>
            </View>
            <View
              style={
                inputColor.playerBottom
                  ? PlayersStyles.txtField
                  : PlayersStyles.txtFieldType
              }
            >
              <TextInput
                onFocus={styleInputs2}
                onBlur={() =>
                  setInputColor({
                    ...inputColor,
                    ["playerBottom"]: !inputColor.playerBottom,
                  })
                }
                style={PlayersStyles.txtFieldInput}
                onChangeText={(newValue) =>
                  onChangeTeamData({ ...teamData, ["player4"]: newValue })
                }
                value={teamData.player4}
              ></TextInput>
              <Text style={PlayersStyles.txtFieldSpan}></Text>
              <Text
                style={
                  labelLift.playerBottom
                    ? PlayersStyles.txtFieldLabel
                    : PlayersStyles.txtFieldLabelAbove
                }
              >
                Player 2
              </Text>
            </View>
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
