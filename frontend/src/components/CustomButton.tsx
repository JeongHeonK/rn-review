import React from "react";
import {
  Dimensions,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  View,
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
      style={({ pressed }) => [
        styles.container,
        invalid && styles.invalid,
        pressed ? styles[`${variant}Pressed`] : styles[variant],
      ]}
      {...props}
    >
      <View style={styles[size]}>
        <Text style={[styles[`${variant}Text`], styles[`${size}Text`]]}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    justifyContent: "center",
    flexDirection: "row",
  },
  invalid: {
    opacity: 0.5,
  },
  filled: {
    backgroundColor: colors.BLUE_800,
  },
  filledPressed: {
    backgroundColor: colors.BLUE_500,
  },
  outlinedPressed: {
    borderColor: colors.BLUE_500,
    borderWidth: 1,
    opacity: 0.6,
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
    flexDirection: "row",
  },
  medium: {
    width: "50%",
    paddingVertical: deviceHeight > 700 ? 12 : 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
