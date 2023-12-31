import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Image,
  PixelRatio,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

function HomeScreen({ navigation }) {
  return (
    <>
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerImg}
          source={require("./assets/Score-Titan-Logo.png")}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.infoText}>
          Welcome card players! Learn new card games and let us keep score.
          Choose a game below to get started. Best of luck and may the odds be
          ever in your favor.
        </Text>
        <View style={styles.gameContainer}>
          <ScrollView>
            <View style={styles.individualGameContainer}>
              <Image
                style={styles.gameImg}
                source={require("./assets/Spades.png")}
              />
              <View style={styles.individualGame}>
                <Text style={styles.individualGameInfoHeader}>Spades</Text>
                <Text style={styles.individualGameInfo}>
                  # of Players: 2 teams of 2 players
                </Text>
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
                <Text style={styles.individualGameInfoHeader}>Spades</Text>
                <Text style={styles.individualGameInfo}>
                  # of Players: 2 teams of 2 players
                </Text>
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
                <Text style={styles.individualGameInfoHeader}>Spades</Text>
                <Text style={styles.individualGameInfo}>
                  # of Players: 2 teams of 2 players
                </Text>
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
                <Text style={styles.individualGameInfoHeader}>Spades</Text>
                <Text style={styles.individualGameInfo}>
                  # of Players: 2 teams of 2 players
                </Text>
                <Text style={styles.individualGameInfo}>
                  Game: Win at least the number of tricks bid between you and
                  your partner
                </Text>
              </View>
            </View>
            <View style={styles.individualGameContainer}>
              <Text>Elevator</Text>
            </View>
          </ScrollView>
          <Text onPress={() => navigation.navigate("Choose Players")}></Text>

          <StatusBar style="auto" />
        </View>
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
  },
  headerImg: {
    width: "100%",
    height: 250,
  },
  header: {
    backgroundColor: "black",
    color: "white",
  },
  infoText: {
    fontSize: getFontSize(17),
    margin: "2%",
  },
  gameContainer: {
    width: "100%",
    flex: 1,
  },
  individualGameContainer: {
    flexDirection: "row",
    margin: "2%",
    borderWidth: 5,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  individualGame: {
    flex: 1,
    margin: "2%",
  },
  individualGameInfoHeader: {
    fontSize: getFontSize(20),
    fontWeight: "bold",
  },
  individualGameInfo: {
    fontSize: getFontSize(17),
  },
  gameImg: {
    width: 100,
    height: 120,
    margin: "2%",
  },
});

//Home Screen- welcome and choose game
// When game loads choose players: depending on how many you can have
// Insturction incons for how to score and rules
// Scoring
