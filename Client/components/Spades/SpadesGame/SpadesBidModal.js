import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Button,
  Pressable,
  Modal,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SpadesStyles } from "./SpadesGameStyles";
import { MaterialIcons } from "@expo/vector-icons";

export function SpadesBidModal(props) {
  //   const [modalOpen, setModalOpen] = useState(false);

  return (
    <Modal
      {...props}
      //   visible={modalOpen}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <View>
        <Text>Modal Text</Text>
        <MaterialIcons name="close" size={50} onPress={props.onHide} />
      </View>
      <View></View>
    </Modal>
  );
}
