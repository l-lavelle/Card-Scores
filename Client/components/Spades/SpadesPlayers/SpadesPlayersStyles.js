import { PixelRatio, StyleSheet } from "react-native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

export const PlayersStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  teamsText: {
    textAlign: "center",
    paddingTop: "5%",
    fontSize: getFontSize(27),
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  team1Container: {
    margin: "2%",
  },
  teamInputText: {
    fontSize: getFontSize(18),
    marginLeft: "3%",
    marginTop: "5%",
  },
  createTeamBtn: {
    margin: "5%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  createTeamTxt: {
    fontSize: getFontSize(18),
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  txtField: {
    position: "relative",
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  txtFieldType: {
    position: "relative",
    borderBottomColor: "red",
    borderBottomWidth: 2,
  },
  txtFieldInput: {
    width: "100%",
    // padding: 0 5,
    height: 40,
    fontSize: 16,
    border: "none",
    background: "none",
    outline: "none",
  },
  txtFieldLabel: {
    position: "absolute",
    top: "50%",
    left: 5,
    color: "#adadad",
    transform: [{ translateY: -50 }],
    fontSize: 16,
    pointerEvents: "none",
  },
});
