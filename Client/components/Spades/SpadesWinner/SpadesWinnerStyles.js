import { PixelRatio, StyleSheet } from "react-native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

export const SpadesWinStyles = StyleSheet.create({
  winnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgrdImg: {
    width: "100%",
    height: 400,
    justifyContent: "center",
    alignItems: "center",
  },

  teamWonText: {
    fontSize: getFontSize(45),
    textAlign: "center",
    backgroundColor: "white",
    padding: 10,
    opacity: 0.8,
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
