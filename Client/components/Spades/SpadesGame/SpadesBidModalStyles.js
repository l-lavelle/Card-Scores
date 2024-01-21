import { PixelRatio, StyleSheet } from "react-native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

export const BidModalSyles = StyleSheet.create({
  closeIcon: {
    textAlign: "right",
  },
  teamName: {
    textAlign: "center",
    fontSize: getFontSize(35),
    marginBottom: "3%",
  },
  nullCheckbox: {
    marginTop: 16,
    justifyContent: "center",
    marginBottom: "3%",
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: "7%",
  },
  scoreBtn: {
    margin: "5%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  scoreText: {
    fontSize: getFontSize(18),
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
