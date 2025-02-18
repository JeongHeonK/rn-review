import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";
import { useForm } from "../../hooks";
import { validateSignup } from "../../util";

function SignupScreen() {
  const signup = useForm({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validate: validateSignup,
  });
  const handleSubmit = () => {
    console.log(signup.inputValues);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          inputMode="email"
          placeholder="아이디"
          error={signup.error.email}
          touched={signup.touched.email}
          {...signup.getTextInputProps("email")}
        />
        <InputField
          secureTextEntry
          placeholder="비밀번호"
          error={signup.error.password}
          touched={signup.touched.password}
          {...signup.getTextInputProps("password")}
        />
        <InputField
          secureTextEntry
          placeholder="비밀번호 확인"
          error={signup.error.passwordConfirm}
          touched={signup.touched.passwordConfirm}
          {...signup.getTextInputProps("passwordConfirm")}
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

export default SignupScreen;
