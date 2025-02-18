interface validateLogin {
  email: string;
  password: string;
}

export function validateLogin(values: validateLogin) {
  let error = { email: "", password: "" };

  if (!/^[^\s@]+@[^/\s@]+\.[^/\s@]+$/.test(values.email)) {
    error = { ...error, email: "유효하지 않은 이메일 입니다." };
  }

  if (values.password.length < 8 || values.password.length > 20) {
    error = { ...error, password: "비밀번호는 8 ~ 20자 사이로 입력해주세요." };
  }

  return error;
}
