import { PixelRatio, StyleSheet } from "react-native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

export const SpadesStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "3%",
  },
  backImg: {
    flex: 1,
  },
  spadesTitle: {
    fontSize: getFontSize(55),
    textAlign: "center",
  },
  rulesContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: "5%",
  },
  rulesText: {
    marginRight: "1%",
    fontSize: getFontSize(24),
  },
  TeamName: {
    fontSize: getFontSize(50),
    marginTop: "2%",
    textDecorationLine: "underline",
  },
  scoreContainer: {
    flex: 1,
    justifyContent: "space-between",
    borderWidth: 3,
    borderRadius: 25,
  },
  spadesTeamConatiner: {
    height: 150,
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: "white",
    opacity: 0.8,
  },
  spadesPlayerName: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  playerNameTxt: {
    fontSize: getFontSize(30),
    marginHorizontal: "3%",
  },
  bidBtn: {
    margin: "5%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  bidBtnText: {
    fontSize: getFontSize(18),
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  score: {
    fontSize: getFontSize(25),
    marginTop: "2%",
  },
});
