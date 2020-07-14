/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import FindPWBtn from "../components/FindPWBtn";
import { style } from "../styles/SigninStyles/StyleIndex";
const { MainText, Container } = style;
import findPassword from "../core/apis/findPassword";
import { StackNavigationProp } from "@react-navigation/stack";
import EmailInput from "../components/EmailInput";
import { validateEmail } from "../core/utils/validateEmail";
import sendSignOutRequest from "../core/apis/logOut";
import useAuth from "../hooks/useAuth";

export type FindPWType = {
  email: string;
  err?: any;
};

const verifyEmail = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}): JSX.Element => {
  const { onLogOut } = useAuth();
  const [value, setValue] = useState<FindPWType>({
    email: "",
    err: {},
  });

  useEffect(() => {
    validateEmail(value, setValue);
  }, [value.email]);

  const handlePress = async () => {
    try {
      await findPassword(value.email);
      await sendSignOutRequest();
      setTimeout(() => {
        onLogOut();
      }, 1000);
      // navigation.replace("Signin");
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 401 || error.response.status === 400) {
        setValue({ ...value, err: { email: "wrong email" } });
      } else if (error.response.status === 403) {
        setValue({ ...value, err: { email: "check email" } });
      }
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <MainText>임시 비밀번호 전송</MainText>
        <EmailInput value={value} onChange={setValue} OS={Platform.OS} />
        <FindPWBtn state={value} setState={setValue} onPress={handlePress} />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default verifyEmail;
