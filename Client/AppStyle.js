import { PixelRatio, StyleSheet } from "react-native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
  },
  headerImg: {
    width: "100%",
    height: 250,
  },
  header: {
    backgroundColor: "black",
    color: "white",
  },
  infoText: {
    fontSize: getFontSize(18),
    margin: "3%",
    marginTop: "3%",
  },
  gameContainer: {
    width: "100%",
    flex: 1,
  },
  individualGameContainer: {
    flexDirection: "row",
    margin: "2%",
    borderWidth: 3,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  individualGame: {
    flex: 1,
    margin: "2%",
  },
  individualGameInfoHeader: {
    fontSize: getFontSize(20),
    fontWeight: "bold",
    textDecorationLine: 1,
    marginBottom: 3,
  },
  individualGameInfo: {
    fontSize: getFontSize(17),
    marginTop: "1%",
  },
  gameImg: {
    width: 100,
    height: 120,
    margin: "2%",
  },
});
