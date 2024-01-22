import React, { useEffect, useRef } from "react";
import { View, Text, Pressable, ImageBackground } from "react-native";
import { SpadesWinStyles } from "./SpadesWinnerStyles";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

export function SpadesWinner(props) {
  const animation = useRef(null);

  const navigation = useNavigation();

  useEffect(() => {
    animation.current?.reset();
    animation.current?.play();
  }, []);

  return (
    <>
      <LottieView
        ref={animation}
        source={require("../../../assets/confetti.json")}
        autoPlay={true}
        loop={true}
      />
      <View style={SpadesWinStyles.winnerContainer}>
        <ImageBackground
          style={SpadesWinStyles.backgrdImg}
          source={require("../../../assets/winner.png")}
        >
          <Text style={SpadesWinStyles.teamWonText}>Winner:</Text>
          <Text style={SpadesWinStyles.teamWonText}>
            {props.route.params.team}
          </Text>
        </ImageBackground>

        <Pressable
          style={SpadesWinStyles.rerouteBtn}
          onPress={() => navigation.navigate("Spades Players")}
        >
          <Text style={SpadesWinStyles.rerouteBtnText}>Play Again</Text>
        </Pressable>
        <Pressable
          style={SpadesWinStyles.rerouteBtn}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={SpadesWinStyles.rerouteBtnText}>Home</Text>
        </Pressable>
      </View>
    </>
  );
}
