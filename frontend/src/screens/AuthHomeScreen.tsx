import React from "react";
import { StyleSheet, View, Button } from "react-native";

function AuthHomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="로그인 화면으로 이동"
        onPress={() => navigation.navigate("Login")}
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

export default AuthHomeScreen;
