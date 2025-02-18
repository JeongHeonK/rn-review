import React from "react";
import {
  Dimensions,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from "react-native";
import { colors } from "../constants";

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: "filled" | "outlined";
  size?: "large" | "medium";
  invalid?: boolean;
  onPress?: () => void;
}

const deviceHeight = Dimensions.get("screen").height;

function CustomButton({
  label,
  variant = "filled",
  size = "large",
  invalid = false,
  ...props
}: CustomButtonProps) {
  return (
    <Pressable
      disabled={invalid}
      style={[
        styles.container,
        styles[variant],
        styles[size],
        invalid && styles.invalid,
      ]}
      {...props}
    >
      <Text style={[styles[`${variant}Text`], styles[`${size}Text`]]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    justifyContent: "center",
  },
  invalid: {
    opacity: 0.5,
  },
  filled: {
    backgroundColor: colors.BLUE_800,
  },
  outlined: {
    borderColor: colors.BLUE_800,
    borderWidth: 1,
  },
  large: {
    width: "90%",
    paddingVertical: deviceHeight > 700 ? 15 : 12,
    alignItems: "center",
    justifyContent: "center",
  },
  medium: {
    width: "50%",
    paddingVertical: deviceHeight > 700 ? 12 : 8,
    alignItems: "center",
    justifyContent: "center",
  },
  filledText: {
    color: colors.WHITE,
  },
  outlinedText: {
    color: colors.BLACK,
  },
  largeText: {
    fontSize: 18,
    fontWeight: "600",
  },
  mediumText: {
    fontSize: 14,
  },
});

export default CustomButton;
