import { PixelRatio, StyleSheet } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

export const SpadesRulesStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "5%",
    marginHorizontal: "4%",
  },
  title: {
    fontSize: getFontSize(30),
    textAlign: "center",
  },
  contentTitle: {
    fontSize: getFontSize(20),
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginTop: "3%",
    marginBottom: "1%",
  },
  rulesText: {
    fontSize: getFontSize(15),
    lineHeight: 21,
  },
  rulesTextEnd: {
    fontSize: getFontSize(15),
    marginBottom: "5%",
    lineHeight: 21,
  },
});
