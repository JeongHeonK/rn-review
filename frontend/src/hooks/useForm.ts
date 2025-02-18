import { useEffect, useState } from "react";

interface UseFormProps<T> {
  initialValues: T;
  validate: (values: T) => Record<keyof T, string>;
}

export function useForm<T>({ initialValues, validate }: UseFormProps<T>) {
  const [inputValues, setFormValues] = useState(initialValues);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [error, setError] = useState<Record<string, string>>({});

  const handleChangeValue = (name: keyof T, text: string) => {
    setFormValues({ ...inputValues, [name]: text });
  };

  const handleBlur = (name: keyof T) => {
    setTouched({ ...touched, [name]: true });
  };

  const getTextInputProps = (name: keyof T) => {
    const values = inputValues[name];
    const onChangeText = (text: string) => handleChangeValue(name, text);
    const onBlur = () => handleBlur(name);

    return { values, onChangeText, onBlur };
  };

  useEffect(() => {
    const newError = validate(inputValues);
    setError(newError);
  }, [validate, inputValues]);

  return { inputValues, error, touched, getTextInputProps };
}
