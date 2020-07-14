import React, { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Dimensions,
} from "react-native";
import { AuthParamList } from "../models/AuthParamList";
import { StackNavigationProp } from "@react-navigation/stack";
import { LoginValue } from "../models/LoginTypes";
import { validateValue } from "../core/utils/validate";
import { style } from "../styles/SigninStyles/StyleIndex";
import { LinkToFindPW, FindPWText } from "../styles/FindPW/SLinkToFindPW.ts";

import Input from "../components/Input";
import Btn from "../components/Btn";
import useAuth from "../hooks/useAuth";
const { MainText, Container } = style;

const Login = ({
  navigation,
}: {
  navigation: StackNavigationProp<AuthParamList, "Signin">;
}): JSX.Element => {
  const [value, setValue] = useState<LoginValue>({
    email: "",
    password: "",
    err: {},
  });
  const { onLogin, isLogin, err: requestError, handleErr } = useAuth();

  useEffect(() => {
    validateValue(value, setValue);
  }, [value.email, value.password]);

  useEffect(() => {
    isLogin && navigation.push("Home");
  }, [isLogin]);

  const handlePress = (value: LoginValue) => {
    // const { email, password } = value;
    handleErr();
    const email = value.email.trim();
    const password = value.password.trim();
    onLogin({ email, password });
  };
  const hanldePressLinkToFindPW = (): void => {
    navigation.navigate("verifyEmail");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <MainText>로그인하기</MainText>
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
        <Btn
          name="signin"
          state={value}
          setState={setValue}
          onPress={handlePress}
        />
        <LinkToFindPW
          onPress={hanldePressLinkToFindPW}
          screenHeight={Dimensions.get("screen").height}
        >
          <FindPWText>비밀번호를 잊으셨나요?</FindPWText>
        </LinkToFindPW>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Login;
