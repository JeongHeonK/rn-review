interface ValidateLogin {
  email: string;
  password: string;
}

function validateUser(values: ValidateLogin) {
  let error = { email: "", password: "" };

  if (!/^[^\s@]+@[^/\s@]+\.[^/\s@]+$/.test(values.email)) {
    error = { ...error, email: "유효하지 않은 이메일 입니다." };
  }

  if (values.password.length < 8 || values.password.length > 20) {
    error = { ...error, password: "비밀번호는 8 ~ 20자 사이로 입력해주세요." };
  }

  return error;
}

export function validateLogin(values: ValidateLogin) {
  return validateUser(values);
}

interface ValidateSignupProps extends ValidateLogin {
  passwordConfirm: string;
}

export function validateSignup(values: ValidateSignupProps) {
  const error = validateUser(values);
  let signupError = { ...error, passwordConfirm: "" };

  if (values.password !== values.passwordConfirm) {
    signupError = {
      ...signupError,
      passwordConfirm: "비밀번호가 일치하지 않습니다.",
    };
  }

  return signupError;
}
