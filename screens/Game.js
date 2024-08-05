import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AnimatedButton from "../components/AnimatedButton";

export default function Game() {
  const [choice, setChoice] = useState("");
  const baseNumber = Math.floor(Math.random() * 100);
  const score = Math.floor(Math.random() * 100);

  const navigation = useNavigation();
  useEffect(() => {
    if (choice) {
      console.log(`base Number = ${baseNumber} et score = ${score}`);
      const winner =
        (choice === "higher" && score > baseNumber) ||
        (choice === "lower" && baseNumber > score);
      Alert.alert(`You've ${winner ? "won" : "lost"}`, `You scored: ${score}`);
      navigation.goBack();
    }
  }, [baseNumber, score, choice]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.baseNumber}>Starting: {baseNumber}</Text>
      <AnimatedButton onPress={() => setChoice("higher")} action="higher" />
      <AnimatedButton onPress={() => setChoice("lower")} action="lower" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  baseNumber: {
    fontSize: 48,
    marginBottom: 30,
  },
});
