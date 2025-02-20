import React, { useRef } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import { useForm } from "@/hooks";
import { validateLogin } from "@/util";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import useAuth from "@/hooks/queries/useAuth";

function LoginScreen() {
  const passwordRef = useRef<TextInput | null>(null);
  const { loginMutation } = useAuth();
  const login = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: validateLogin,
  });

  const handleSubmit = () => {
    loginMutation.mutate(login.inputValues);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          inputMode="email"
          placeholder="아이디"
          blurOnSubmit={false}
          returnKeyType="next"
          error={login.error.email}
          touched={login.touched.email}
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...login.getTextInputProps("email")}
        />
        <InputField
          secureTextEntry
          ref={passwordRef}
          placeholder="비밀번호"
          blurOnSubmit={false}
          returnKeyType="join"
          error={login.error.password}
          textContentType="oneTimeCode"
          touched={login.touched.password}
          onSubmitEditing={handleSubmit}
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
