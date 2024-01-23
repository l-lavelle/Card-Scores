import React, { useState } from "react";
import { View, Text, Pressable, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Counter } from "../SpadesCounter/Counter";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { BidModalSyles } from "./SpadesBidModalStyles";

export function SpadesBidModal(props) {
  const saveBid = async () => {
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
    setBid({ team1bid: 4, team2bid: 4, team1null: false, team2null: false });
    setRoundscore({
      team1MadeBid: false,
      team1LostBid: false,
      team2MadeBid: false,
      team2LostBid: false,
      team1MadeNull: false,
      team1LostNull: false,
      team2MadeNull: false,
      team2LostNull: false,
    });
    props.onHide();
  };

  const madeBid = async (value) => {
    if (value === "team1") {
      let add1Score = bid.team1bid * 10 + props.team1Score;
      if (roundScore.team1MadeNull) {
        add1Score = 100 + add1Score;
      } else if (roundScore.team1LostNull) {
        add1Score = add1Score - 100;
      }
      props.update1Score(add1Score);
    } else {
      let add2Score = bid.team2bid * 10 + props.team2Score;
      if (roundScore.team2MadeNull) {
        add2Score = 100 + add2Score;
      } else if (roundScore.team2LostNull) {
        add2Score = add2Score - 100;
      }
      props.update2Score(add2Score);
    }
  };

  const lostBid = async (value) => {
    if (value === "team1") {
      let lost1Score = props.team1Score - bid.team1bid * 10;
      if (roundScore.team1MadeNull) {
        lost1Score = 100 + lost1Score;
      } else if (roundScore.team1LostNull) {
        lost1Score = lost1Score - 100;
      }
      props.update1Score(lost1Score);
    } else {
      let lost2Score = props.team2Score - bid.team2bid * 10;
      if (roundScore.team2MadeNull) {
        lost2Score = 100 + lost2Score;
      } else if (roundScore.team2LostNull) {
        lost2Score = lost2Score - 100;
      }
      props.update2Score(lost2Score);
    }
  };

  // Set state for the counters and pass down
  const [bid, setBid] = useState({
    team1bid: 4,
    team2bid: 4,
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
        <MaterialIcons
          name="close"
          size={50}
          onPress={props.onHide}
          style={BidModalSyles.closeIcon}
        />
        <>
          <Text style={BidModalSyles.teamName}>{props.team1Name}</Text>
          <Counter teamBid={bid.team1bid} onUpdate={update1Bid} />

          <BouncyCheckbox
            style={BidModalSyles.nullCheckbox}
            textStyle={{
              textDecorationLine: "none",
              fontSize: 20,
            }}
            fillColor="black"
            isChecked={bid.team1null}
            text="Null"
            innerIconStyle={{
              borderRadius: 0,
              borderWidth: 2,
            }}
            disableBuiltInState
            onPress={() => setBid({ ...bid, ["team1null"]: !bid.team1null })}
          />
          <View style={BidModalSyles.scoreContainer}>
            <View>
              <BouncyCheckbox
                style={{ marginTop: 16 }}
                textStyle={{
                  textDecorationLine: "none",
                  fontSize: 20,
                }}
                fillColor="green"
                innerIconStyle={{
                  borderWidth: 2,
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
                  fontSize: 20,
                }}
                fillColor="red"
                innerIconStyle={{
                  borderWidth: 2,
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
            </View>
            {bid.team1null ? (
              <View>
                <BouncyCheckbox
                  style={{ marginTop: 16 }}
                  textStyle={{
                    textDecorationLine: "none",
                    fontSize: 20,
                  }}
                  fillColor="green"
                  innerIconStyle={{
                    borderWidth: 2,
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
                    fontSize: 20,
                  }}
                  isChecked={roundScore.team1LostNull}
                  fillColor="red"
                  innerIconStyle={{
                    borderWidth: 2,
                  }}
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
              </View>
            ) : (
              <></>
            )}
          </View>
        </>

        <Text style={BidModalSyles.teamName}>{props.team2Name}</Text>
        <Counter teamBid={bid.team2bid} onUpdate={update2Bid} />
        <BouncyCheckbox
          style={BidModalSyles.nullCheckbox}
          textStyle={{
            textDecorationLine: "none",
            fontSize: 20,
          }}
          isChecked={bid.team2null}
          text="Null"
          fillColor="black"
          innerIconStyle={{
            borderRadius: 0,
            borderWidth: 2,
          }}
          disableBuiltInState
          onPress={() => setBid({ ...bid, ["team2null"]: !bid.team2null })}
        />
        <View style={BidModalSyles.scoreContainer}>
          <View>
            <BouncyCheckbox
              style={{ marginTop: 16 }}
              textStyle={{
                textDecorationLine: "none",
                fontSize: 20,
              }}
              isChecked={roundScore.team2MadeBid}
              fillColor="green"
              innerIconStyle={{
                borderWidth: 2,
              }}
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
                fontSize: 20,
              }}
              isChecked={roundScore.team2LostBid}
              fillColor="red"
              innerIconStyle={{
                borderWidth: 2,
              }}
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
          </View>
          {bid.team2null ? (
            <View>
              <BouncyCheckbox
                style={{ marginTop: 16 }}
                textStyle={{
                  textDecorationLine: "none",
                  fontSize: 20,
                }}
                isChecked={roundScore.team2MadeNull}
                fillColor="green"
                innerIconStyle={{
                  borderWidth: 2,
                }}
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
                  fontSize: 20,
                }}
                isChecked={roundScore.team2LostNull}
                fillColor="red"
                innerIconStyle={{
                  borderWidth: 2,
                }}
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
            </View>
          ) : (
            <></>
          )}
        </View>
        <Pressable onPress={saveBid} style={BidModalSyles.scoreBtn}>
          <Text style={BidModalSyles.scoreText}>Score Round</Text>
        </Pressable>
      </View>
    </Modal>
  );
}
