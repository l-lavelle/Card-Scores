import { PixelRatio, StyleSheet } from "react-native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

export const SpadesWinStyles = StyleSheet.create({
  winnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  teamWonText: {
    fontSize: getFontSize(30),
    textAlign: "center",
  },
  rerouteBtn: {
    margin: "5%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  rerouteBtnText: {
    fontSize: getFontSize(18),
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
