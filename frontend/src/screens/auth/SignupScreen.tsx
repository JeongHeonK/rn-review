import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthStackParamList } from "../../navigations/stack/AuthStackNavigator";
import { authNavigations } from "../../constants";

type SignupScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.SIGNUP
>;

function SignupScreen({ navigation }: SignupScreenProps) {
  return (
    <View style={styles.container}>
      <Text>가입하쇼</Text>
      <Button
        title="home으로"
        onPress={() => navigation.navigate("AuthHome")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 10,
  },
});

export default SignupScreen;
