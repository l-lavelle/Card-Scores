import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from "./AppStyle";

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
            <View style={styles.individualGameContainer}>
              <Image
                style={styles.gameImg}
                source={require("./assets/Spades.png")}
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
                source={require("./assets/Spades.png")}
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
            <Text onPress={() => navigation.navigate("Choose Players")}></Text>
            <StatusBar style="auto" />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

function PlayersScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Players</Text>
      </View>
      <View style={styles.container}>
        <Text>Card Scorer</Text>
        <Text>Hi my name is lauren</Text>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Choose Players" component={PlayersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

//Home Screen- welcome and choose game
// When game loads choose players: depending on how many you can have
// Insturction incons for how to score and rules
// Scoring
