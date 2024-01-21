import { PixelRatio, StyleSheet } from "react-native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

export const BidModalSyles = StyleSheet.create({
  closeIcon: {
    textAlign: "right",
  },
  teamName: {
    textAlign: "center",
    fontSize: getFontSize(20),
  },
});
