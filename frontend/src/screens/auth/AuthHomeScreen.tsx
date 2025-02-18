import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { AuthStackParamList } from "../../navigations/stack/AuthStackNavigator";
import { authNavigations } from "../../constants";
import CustomButton from "../../components/CustomButton";

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({ navigation }: AuthHomeScreenProps) {
  return (
    <View style={styles.container}>
      <CustomButton
        label="로그인 화면으로 이동"
        onPress={() => navigation.navigate(authNavigations.LOGIN)}
      />
      <CustomButton
        variant="outlined"
        label="회원가입 화면으로 이동"
        onPress={() => navigation.navigate(authNavigations.SIGNUP)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AuthHomeScreen;
