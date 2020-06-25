import React, { useState, useEffect } from "react";
import { TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import { LoginValue } from "../models/LoginTypes";
import { AuthParamList } from "../models/AuthParamList";
import { StackNavigationProp } from "@react-navigation/stack";
import { validateValue } from "../core/utils/validate";
import { style } from "../styles/SigninStyles/StyleIndex";
import Input from "../components/Input";
import Btn from "../components/Btn";
import useAuth from "../hooks/useAuth";
const { MainText, Container } = style;

const SignUp = ({
  navigation,
}: {
  navigation: StackNavigationProp<AuthParamList, "Signup">;
}): JSX.Element => {
  const [value, setValue] = useState<LoginValue>({
    email: "",
    password: "",
    passwordCheck: "",
    err: {},
  });

  const { user_id, onSignup, handleErr } = useAuth();

  const onPress = (value: LoginValue) => {
    handleErr();
    const email = value.email.trim();
    const password = value.password.trim();
    // const { email, password } = value;
    onSignup({ email, password });
  };

  useEffect(() => {
    validateValue(value, setValue);
  }, [value.email, value.passowrd, value.passwordCheck]);

  useEffect(() => {
    user_id !== -1 && navigation.replace("Welcome");
  }, [user_id]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <MainText OS={Platform.OS}>회원가입하기</MainText>
        <Input
          name="email"
          value={value}
          onChange={setValue}
          OS={Platform.OS}
        />
        <Input
          name="password"
          value={value}
          onChange={setValue}
          OS={Platform.OS}
        />
        <Input
          name="passwordCheck"
          value={value}
          onChange={setValue}
          OS={Platform.OS}
        />
        <Btn
          name="signup"
          state={value}
          setState={setValue}
          onPress={onPress}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default SignUp;
