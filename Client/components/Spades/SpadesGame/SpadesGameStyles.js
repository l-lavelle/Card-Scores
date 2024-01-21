import { PixelRatio, StyleSheet } from "react-native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

export const SpadesStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "3%",
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
  },
  spadesTeamConatiner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderRadius: 25,
    marginTop: "3%",
    marginBottom: "3%",
  },
  spadesPlayerName: {
    flexDirection: "row",
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
  },
});
