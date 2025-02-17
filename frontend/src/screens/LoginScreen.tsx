import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Button, StyleSheet, View } from "react-native";
import { AuthStackParamList } from "../navigations/AuthStackNavigator";
import { authNavigations } from "../constants";

type LoginScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.LOGIN
>;

function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <View style={styles.container}>
      <Button
        title="회원 가입 화면으로 이동"
        onPress={() => navigation.navigate(authNavigations.AUTH_HOME)}
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
