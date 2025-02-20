import React, { useRef } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import InputField from "@/components/InputField";
import CustomButton from "@/components/CustomButton";
import { useForm } from "@/hooks";
import { validateSignup } from "@/util";
import useAuth from "@/hooks/queries/useAuth";

function SignupScreen() {
  const { signupMutation, loginMutation } = useAuth();
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);
  const signup = useForm({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validate: validateSignup,
  });
  const handleSubmit = () => {
    const { email, password } = signup.inputValues;

    signupMutation.mutate(
      { email, password },
      {
        onSuccess: () => loginMutation.mutate({ email, password }),
      },
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          inputMode="email"
          placeholder="아이디"
          returnKeyType="next"
          blurOnSubmit={false}
          error={signup.error.email}
          touched={signup.touched.email}
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...signup.getTextInputProps("email")}
        />
        <InputField
          secureTextEntry
          ref={passwordRef}
          placeholder="비밀번호"
          returnKeyType="next"
          blurOnSubmit={false}
          textContentType="oneTimeCode"
          error={signup.error.password}
          touched={signup.touched.password}
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          {...signup.getTextInputProps("password")}
        />
        <InputField
          secureTextEntry
          placeholder="비밀번호 확인"
          ref={passwordConfirmRef}
          textContentType="oneTimeCode"
          error={signup.error.passwordConfirm}
          touched={signup.touched.passwordConfirm}
          onSubmitEditing={handleSubmit}
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
