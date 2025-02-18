import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { AuthStackParamList } from "../../navigations/stack/AuthStackNavigator";
import { authNavigations } from "../../constants";
import CustomButton from "../../components/CustomButton";

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({ navigation }: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require("../../assets/practice.jpg")}
        />
      </View>
      <View style={styles.buttonContainer}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignItems: "center",
  },
  imageContainer: {
    flex: 2,
    alignItems: "center",
    width: Dimensions.get("screen").width / 1.5,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  buttonContainer: {
    gap: 12,
    flex: 1,
  },
});

export default AuthHomeScreen;
