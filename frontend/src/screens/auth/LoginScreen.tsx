import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useForm } from "../../hooks";
import { validateLogin } from "../../util";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";

function LoginScreen() {
  const login = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateLogin,
  });

  const handleSubmit = () => {
    console.log(login.inputValues);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          inputMode="email"
          placeholder="아이디"
          error={login.error.email}
          touched={login.touched.email}
          {...login.getTextInputProps("email")}
        />
        <InputField
          secureTextEntry
          placeholder="비밀번호"
          error={login.error.password}
          touched={login.touched.password}
          {...login.getTextInputProps("password")}
        />
        <CustomButton
          size="large"
          label="로그인"
          variant="filled"
          onPress={handleSubmit}
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
    marginBottom: 30,
  },
});

export default LoginScreen;
