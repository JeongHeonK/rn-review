import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, View } from "react-native";

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="회원 가입 화면으로 이동"
        onPress={() => navigation.navigate("AuthHome")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
