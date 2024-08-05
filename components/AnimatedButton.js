import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
} from "react-native";

export default function AnimatedButton({ onPress, action }) {
  const opacity = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    Animated.timing(opacity, {
      toValue: 0.2,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      onPress();
      // Optionally reset opacity after onPress action
      Animated.timing(opacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <Animated.View
        style={[
          styles.button,
          action === "higher" ? styles.buttonGreen : styles.buttonRed,
          {
            opacity: opacity,
          },
        ]}
      >
        <Text style={styles.buttonText}>{action}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  buttonText: {
    fontSize: 24,
    color: "white",
  },
  buttonGreen: {
    backgroundColor: "green",
  },
  buttonRed: {
    backgroundColor: "red",
  },
});
