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
  team1Container: {
    margin: "3%",
    marginTop: "8%",
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
    borderBottomWidth: 3,
    marginHorizontal: "2%",
    marginTop: "2%",
    marginBottom: "10%",
  },
  txtFieldType: {
    position: "relative",
    borderBottomColor: "red",
    borderBottomWidth: 3,
    marginHorizontal: "2%",
    marginTop: "2%",
    marginBottom: "10%",
  },
  txtFieldInput: {
    width: "100%",
    height: 20,
    fontSize: 16,
    border: "none",
    background: "none",
    outline: "none",
    marginTop: "8%",
  },
  txtFieldLabel: {
    position: "absolute",
    top: "50%",
    color: "black",
    transform: [{ translateY: -15 }],
    fontSize: getFontSize(20),
    pointerEvents: "none",
    marginTop: "5%",
    fontWeight: "bold",
  },
  txtFieldLabelAbove: {
    position: "absolute",
    top: "50%",
    color: "black",
    transform: [{ translateY: -55 }],
    fontSize: getFontSize(20),
    fontWeight: "bold",
    pointerEvents: "none",
    marginTop: "5%",
  },
});
