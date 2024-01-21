import { PixelRatio, StyleSheet } from "react-native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

export const CounterStyles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  bidAmount: {
    fontSize: getFontSize(20),
    fontWeight: "bold",
    marginHorizontal: "3%",
  },
});
