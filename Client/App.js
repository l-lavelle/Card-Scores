import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "./AppStyle";
import { SpadesPlayers } from "./components/Spades/SpadesPlayers/SpadesPlayers";
import { SpadesGame } from "./components/Spades/SpadesGame/SpadesGame";

function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerImg}
          source={require("./assets/Score-Titan-Logo.png")}
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.infoText}>
            Welcome card players! Learn new card games and let us keep score.
            Choose a game below to get started. Best of luck and may the odds be
            ever in your favor.
          </Text>
          <View style={styles.gameContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Spades Players")}
            >
              <View style={styles.individualGameContainer}>
                <Image
                  style={styles.gameImg}
                  source={require("./assets/Spades.png")}
                />
                <View style={styles.individualGame}>
                  <Text style={styles.individualGameInfoHeader}>Spades</Text>
                  <Text style={styles.individualGameInfo}># of Players: 4</Text>
                  <Text style={styles.individualGameInfo}>
                    Game: Win at least the number of tricks bid between you and
                    your partner
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.individualGameContainer}>
              <Image
                style={styles.gameImg}
                source={require("./assets/Euchre.png")}
              />
              <View style={styles.individualGame}>
                <Text style={styles.individualGameInfoHeader}>Euchre</Text>
                <Text style={styles.individualGameInfo}># of Players: 4</Text>
                <Text style={styles.individualGameInfo}>
                  Game: Teams of partners trying to get to 10 points to win
                </Text>
              </View>
            </View>
            <View style={styles.individualGameContainer}>
              <Image
                style={styles.gameImg}
                source={require("./assets/Elevator.png")}
              />
              <View style={styles.individualGame}>
                <Text style={styles.individualGameInfoHeader}>Elevator</Text>
                <Text style={styles.individualGameInfo}># of Players: 2-7</Text>
                <Text style={styles.individualGameInfo}>
                  Game: Each player tries to get the exact number of tricks they
                  call but someone always get screwed
                </Text>
              </View>
            </View>
            <StatusBar style="auto" />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Spades Players" component={SpadesPlayers} />
        <Stack.Screen name="Spades" component={SpadesGame} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// When game loads choose players: depending on how many you can have
// Insturction incons for how to score and rules
// Scoring

// Need to change font family: open sans and others
// Pictures for other games
