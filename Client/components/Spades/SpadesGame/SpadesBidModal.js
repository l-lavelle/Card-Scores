import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Modal } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";
import { Counter } from "../SpadesCounter/Counter";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export function SpadesBidModal(props) {
  const saveBid = async () => {
    console.log("hi");
    if (roundScore.team1MadeBid) {
      madeBid("team1");
    }
    if (roundScore.team1LostBid) {
      lostBid("team1");
    }
    if (roundScore.team2MadeBid) {
      madeBid("team2");
    }
    if (roundScore.team2LostBid) {
      lostBid("team2");
    }
  };

  const madeBid = async (value) => {
    if (value === "team1") {
      console.log("team1 made");
      let add1Score = bid.team1bid * 10 + props.team1Score;
      if (roundScore.team1MadeNull) {
        add1Score = 100 + add1Score;
      } else if (roundScore.team1LostNull) {
        add1Score = add1Score - 100;
      }
      console.log(add1Score);
      props.update1Score(add1Score);
    } else {
      console.log("team 2 made");
      let add2Score = bid.team2bid * 10 + props.team2Score;
      if (roundScore.team2MadeNull) {
        add2Score = 100 + add2Score;
      } else if (roundScore.team2LostNull) {
        add2Score = add2Score - 100;
      }
      console.log(add2Score);
      props.update2Score(add2Score);
    }
  };

  const lostBid = async (value) => {
    console.log(2);
    if (value === "team1") {
      console.log("team 1 lost");
      let lost1Score = props.team1Score - bid.team1bid * 10;
      if (roundScore.team1MadeNull) {
        lost1Score = 100 + lost1Score;
      } else if (roundScore.team1LostNull) {
        lost1Score = lost1Score - 100;
      }
      console.log(lost1Score);
      props.update1Score(lost1Score);
    } else {
      console.log("team 2 lost");
      let lost2Score = props.team2Score - bid.team2bid * 10;
      if (roundScore.team2MadeNull) {
        lost2Score = 100 + lost2Score;
      } else if (roundScore.team2LostNull) {
        lost2Score = lost2Score - 100;
      }
      console.log(lost2Score);
      props.update2Score(lost2Score);
    }
  };

  // Set state for the counters and pass down
  const [bid, setBid] = useState({
    team1bid: 0,
    team2bid: 0,
    team1null: false,
    team2null: false,
  });
  const [roundScore, setRoundscore] = useState({
    team1MadeBid: false,
    team1LostBid: false,
    team2MadeBid: false,
    team2LostBid: false,
    team1MadeNull: false,
    team1LostNull: false,
    team2MadeNull: false,
    team2LostNull: false,
  });

  const update1Bid = (bidData) => setBid({ ...bid, ["team1bid"]: bidData });
  const update2Bid = (bidData) => setBid({ ...bid, ["team2bid"]: bidData });

  return (
    <Modal {...props} animationType="slide" presentationStyle="pageSheet">
      <View>
        <MaterialIcons name="close" size={50} onPress={props.onHide} />
        <>
          <Counter teamBid={bid.team1bid} onUpdate={update1Bid} />
          <BouncyCheckbox
            style={{ marginTop: 16 }}
            textStyle={{
              textDecorationLine: "none",
            }}
            isChecked={bid.team1null}
            text="Null"
            disableBuiltInState
            onPress={() => setBid({ ...bid, ["team1null"]: !bid.team1null })}
          />

          <BouncyCheckbox
            style={{ marginTop: 16 }}
            textStyle={{
              textDecorationLine: "none",
            }}
            isChecked={roundScore.team1MadeBid}
            text="Made Bid"
            disableBuiltInState
            onPress={() =>
              setRoundscore({
                ...roundScore,
                ["team1MadeBid"]: !roundScore.team1MadeBid,
                ["team1LostBid"]: false,
              })
            }
          />
          <BouncyCheckbox
            style={{ marginTop: 16 }}
            textStyle={{
              textDecorationLine: "none",
            }}
            isChecked={roundScore.team1LostBid}
            text="Lost Bid"
            disableBuiltInState
            onPress={() =>
              setRoundscore({
                ...roundScore,
                ["team1LostBid"]: !roundScore.team1LostBid,
                ["team1MadeBid"]: false,
              })
            }
          />
          {bid.team1null ? (
            <>
              <BouncyCheckbox
                style={{ marginTop: 16 }}
                textStyle={{
                  textDecorationLine: "none",
                }}
                isChecked={roundScore.team1MadeNull}
                text="Made Null"
                disableBuiltInState
                onPress={() =>
                  setRoundscore({
                    ...roundScore,
                    ["team1MadeNull"]: !roundScore.team1MadeNull,
                    ["team1LostNull"]: false,
                  })
                }
              />
              <BouncyCheckbox
                style={{ marginTop: 16 }}
                textStyle={{
                  textDecorationLine: "none",
                }}
                isChecked={roundScore.team1LostNull}
                text="Lost Null"
                disableBuiltInState
                onPress={() =>
                  setRoundscore({
                    ...roundScore,
                    ["team1LostNull"]: !roundScore.team1LostNull,
                    ["team1MadeNull"]: false,
                  })
                }
              />
            </>
          ) : (
            <></>
          )}
        </>
        <Counter teamBid={bid.team2bid} onUpdate={update2Bid} />
        <BouncyCheckbox
          style={{ marginTop: 16 }}
          textStyle={{
            textDecorationLine: "none",
          }}
          isChecked={bid.team2null}
          text="Null"
          disableBuiltInState
          onPress={() => setBid({ ...bid, ["team2null"]: !bid.team2null })}
        />

        <BouncyCheckbox
          style={{ marginTop: 16 }}
          textStyle={{
            textDecorationLine: "none",
          }}
          isChecked={roundScore.team2MadeBid}
          text="Made Bid"
          disableBuiltInState
          onPress={() =>
            setRoundscore({
              ...roundScore,
              ["team2MadeBid"]: !roundScore.team2MadeBid,
              ["team2LostBid"]: false,
            })
          }
        />
        <BouncyCheckbox
          style={{ marginTop: 16 }}
          textStyle={{
            textDecorationLine: "none",
          }}
          isChecked={roundScore.team2LostBid}
          text="Lost Bid"
          disableBuiltInState
          onPress={() =>
            setRoundscore({
              ...roundScore,
              ["team2LostBid"]: !roundScore.team2LostBid,
              ["team2MadeBid"]: false,
            })
          }
        />
        {bid.team2null ? (
          <>
            <BouncyCheckbox
              style={{ marginTop: 16 }}
              textStyle={{
                textDecorationLine: "none",
              }}
              isChecked={roundScore.team2MadeNull}
              text="Made Null"
              disableBuiltInState
              onPress={() =>
                setRoundscore({
                  ...roundScore,
                  ["team2MadeNull"]: !roundScore.team2MadeNull,
                  ["team2LostNull"]: false,
                })
              }
            />
            <BouncyCheckbox
              style={{ marginTop: 16 }}
              textStyle={{
                textDecorationLine: "none",
              }}
              isChecked={roundScore.team2LostNull}
              text="Lost Null"
              disableBuiltInState
              onPress={() =>
                setRoundscore({
                  ...roundScore,
                  ["team2LostNull"]: !roundScore.team2LostNull,
                  ["team2MadeNull"]: false,
                })
              }
            />
          </>
        ) : (
          <></>
        )}
        <Pressable onPress={saveBid} style={{ marginTop: 16 }}>
          <Text>Score Round</Text>
        </Pressable>
      </View>
      <View></View>
    </Modal>
  );
}
