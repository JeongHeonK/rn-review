import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface CustomButtonProps {
  label: string;
  variant: "filled" | "outlined";
  onPress?: () => void;
}

function CustomButton({ label, variant, onPress }: CustomButtonProps) {
  return (
    <Pressable style={[styles.container, styles[variant]]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  filled: {
    backgroundColor: "#a1e3f9",
  },
  outlined: {
    borderColor: "#3674b5",
    borderWidth: 1,
  },
  text: {
    fontSize: 14,
  },
});

export default CustomButton;
