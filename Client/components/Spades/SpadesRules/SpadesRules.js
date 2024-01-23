import { View, Text, ScrollView } from "react-native";
import { SpadesRulesStyles } from "./SpadesRulesStyles";

export function SpadesRules({ navigation }) {
  return (
    <>
      <View style={SpadesRulesStyles.container}>
        <Text style={SpadesRulesStyles.title}>Spades Rules</Text>
        <ScrollView>
          <Text style={SpadesRulesStyles.contentTitle}>Trump</Text>
          <Text style={SpadesRulesStyles.rulesText}>Always spades</Text>
          <Text style={SpadesRulesStyles.contentTitle}>Rank of Cards</Text>
          <Text style={SpadesRulesStyles.rulesText}>
            A (high), K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2
          </Text>
          <Text style={SpadesRulesStyles.contentTitle}>Players</Text>
          <Text style={SpadesRulesStyles.rulesText}>
            4 person game with 2 teams of 2
          </Text>
          <Text style={SpadesRulesStyles.contentTitle}>Object</Text>
          <Text style={SpadesRulesStyles.rulesText}>
            Win at least the number of tricks that your team bid
          </Text>
          <Text style={SpadesRulesStyles.contentTitle}>Deal</Text>
          <Text style={SpadesRulesStyles.rulesText}>
            Deal out all 52 cards at the beginning of each round. Each player
            should have 13 cards.
          </Text>
          <Text style={SpadesRulesStyles.contentTitle}>Bid</Text>
          <Text style={SpadesRulesStyles.rulesText}>
            Each player will decide how many tricks they think they can catch.
            Bidding starts left of the dealer and ends with the dealer. The
            number of tricks you want to catch for the round is the combined
            score of you and your partner.
          </Text>
          <Text style={SpadesRulesStyles.contentTitle}>How to Play</Text>
          <Text style={SpadesRulesStyles.rulesText}>
            Player to the left of the dealer leads the round. Each player will
            pick a card to play and must follow suit if possible. The highest
            card or the highest trump card will win the round. The player who
            wins the trick leads the next round. Spades cannot be led unless
            played previously or player to lead has nothing but Spades in his
            hand.
          </Text>
          <Text style={SpadesRulesStyles.contentTitle}>Scoring</Text>
          <Text style={SpadesRulesStyles.rulesText}>
            If you get the number of tricks you bid you get your bid x 10. If
            you get over the number of trick you bid add 1 point for each
            additional trick caught. If you didnt get the number of trick you
            bid its negative your bid x 10.
            <View>
              <Text style={SpadesRulesStyles.rulesText}>
                Example: Bid 5 and made it - Score: 50
              </Text>
            </View>
            <View>
              <Text style={SpadesRulesStyles.rulesText}>
                Example: Bid 4 and got 6 - Score: 42
              </Text>
            </View>
            <View>
              <Text style={SpadesRulesStyles.rulesText}>
                Example: Bid 6 and didnt get 6 - Score: -60
              </Text>
            </View>
          </Text>
          <Text style={SpadesRulesStyles.contentTitle}>Null</Text>
          <Text style={SpadesRulesStyles.rulesTextEnd}>
            If you dont think you can get a trick you can call null. If you dont
            catch a single trick your team gets 100 points. But if you get any
            tricks its -100 so bid carefully.
          </Text>
        </ScrollView>
      </View>
    </>
  );
}
