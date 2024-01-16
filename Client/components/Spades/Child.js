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

export const Child = ({ onUpdate }) => {
  return (
    <TouchableOpacity onPress={onUpdate.bind(this, "Child Data")}>
      <Text>{"Press here for update!"}</Text>
    </TouchableOpacity>
  );
};
