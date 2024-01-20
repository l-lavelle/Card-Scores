import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function SpadesRules({ navigation }) {
  return (
    <>
      <View>
        <Text>Spades Rules</Text>
        <Text>Trump</Text>
        <Text>Always spades</Text>
        <Text>Rank of Cards</Text>
        <Text>A (high), K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2</Text>
        <Text>Players</Text>
        <Text>4 person game with 2 teams of 2</Text>
        <Text>Object</Text>
        <Text> win at least the number of tricks that your team bid</Text>
        <Text>Deal</Text>
        <Text>
          Deal out all 52 cards at the beginning of each round. Each player
          should have 13 cards
        </Text>
        <Text>Bid</Text>
        <Text>
          Each player will decide how many tricks they think they can catch.
          Bidding starts left of the dealer and ends with the dealer. The number
          of tricks you want to catch for the round is the combined score of you
          and your partner
        </Text>
        <Text>How to Play</Text>
        <Text>
          Player to the left of the dealer leads the round. Each player will
          pick a card to play and must follow suit if possible. The highest card
          or the highest trump card will win the round. The player who wins the
          trick leads the next round.Spades cannot be led unless played
          previously or player to lead has nothing but Spades in his hand.
        </Text>
        <Text>Scoring</Text>
        <Text>Null</Text>
      </View>
    </>
  );
}

export default SpadesRules;
