import React, { useState } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthStackParamList } from "../../navigations/stack/AuthStackNavigator";
import { authNavigations } from "../../constants";
import InputField from "../../components/InputField";
import { SafeAreaView } from "react-native-safe-area-context";

type LoginScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.LOGIN
>;

function LoginScreen({ navigation }: LoginScreenProps) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const handleChangeValue = (name: string, text: string) => {
    setValues((prev) => ({ ...prev, [name]: text }));
  };

  const handleBlur = (name: string) => {
    setTouched({ ...touched, [name]: true });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          value={values.email}
          inputMode="email"
          placeholder="아이디"
          error="이메일을 입력하세요"
          touched={touched.email}
          onBlur={() => handleBlur("email")}
          onChangeText={(text: string) => handleChangeValue("email", text)}
        />
        <InputField
          value={values.password}
          inputMode="numeric"
          placeholder="비밀번호"
          error="이메일을 입력하세요"
          touched={touched.password}
          onBlur={() => handleBlur("password")}
          onChangeText={(text: string) => handleChangeValue("password", text)}
        />
        <Button
          title="회원 가입 화면으로 이동"
          onPress={() => navigation.navigate(authNavigations.AUTH_HOME)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 12,
  },
});

export default LoginScreen;
