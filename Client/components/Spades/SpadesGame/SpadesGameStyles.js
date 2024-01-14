import { PixelRatio, StyleSheet } from "react-native";

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

export const SpadesStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    borderWidth: 3,
    borderColor: "red",
    alignItems: "center",
  },
  TeamName: {
    fontSize: getFontSize(30),
  },
  //   teamsText: {
  //     textAlign: "center",
  //     paddingTop: "5%",
  //     fontSize: getFontSize(27),
  //   },
  //   input: {
  //     height: 40,
  //     margin: 12,
  //     borderWidth: 1,
  //     padding: 10,
  //   },
  //   team1Container: {
  //     margin: "2%",
  //   },
  //   teamInputText: {
  //     fontSize: getFontSize(18),
  //     marginLeft: "3%",
  //     marginTop: "5%",
  //   },
  //   createTeamBtn: {
  //     margin: "5%",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     paddingVertical: 12,
  //     paddingHorizontal: 32,
  //     borderRadius: 4,
  //     elevation: 3,
  //     backgroundColor: "black",
  //   },
  //   createTeamTxt: {
  //     fontSize: getFontSize(18),
  //     lineHeight: 21,
  //     fontWeight: "bold",
  //     letterSpacing: 0.25,
  //     color: "white",
  //   },
});
