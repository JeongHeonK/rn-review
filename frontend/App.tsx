import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("");

  const handleChangeInput = (text: string) => {
    setName(text);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text>문자</Text>
        <TextInput
          value={name}
          style={styles.input}
          onChangeText={handleChangeInput}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 10,
  },
  input: {
    height: 50,
    width: 100,
    flex: 1,
    borderWidth: 2,
    borderColor: "black",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
