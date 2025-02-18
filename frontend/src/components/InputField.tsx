import React, { useRef } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInputProps,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { colors } from "../constants";

interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
  error?: string;
  touched?: boolean;
}

const deviceHeight = Dimensions.get("screen").height;

function InputField({
  error,
  touched,
  disabled = false,
  ...props
}: InputFieldProps) {
  const innerRef = useRef<TextInput | null>(null);

  const handleClickInput = () => {
    innerRef.current?.focus();
  };

  return (
    <Pressable onPress={handleClickInput}>
      <View
        style={[
          styles.container,
          disabled && styles.disabled,
          touched && Boolean(error) && styles.inputError,
        ]}
      >
        <TextInput
          ref={innerRef}
          {...props}
          spellCheck={false}
          autoCorrect={false}
          autoCapitalize="none"
          placeholderTextColor={colors.GRAY_500}
          style={[styles.input, disabled && styles.disabled]}
        />
        {touched && Boolean(error) && <Text style={styles.error}>{error}</Text>}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.GRAY_200,
    padding: deviceHeight > 700 ? 15 : 10,
  },
  input: {
    fontSize: 16,
    color: colors.BLACK,
    padding: 0,
  },
  inputError: {
    borderWidth: 1,
    borderColor: colors.RED_300,
    padding: deviceHeight > 700 ? 15 : 10,
  },
  disabled: {
    backgroundColor: colors.GRAY_200,
    color: colors.GRAY_700,
  },
  error: {
    color: colors.RED_500,
    fontSize: 12,
    paddingTop: 10,
  },
});

export default InputField;
