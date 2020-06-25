import React from "react";
import { Platform } from "react-native";
import { styled } from "../styles/StartStyles/StyleIndex";
const { LoginBtn, LoginLabel } = styled;

type Props = {
  name: string;
  onPress?: VoidFunction;
  route: string;
};
const LoginBox = ({ name, onPress, route }: Props): JSX.Element => {
  return (
    <LoginBtn onPress={onPress} route={route}>
      <LoginLabel OS={Platform.OS} route={route}>
        {name}
      </LoginLabel>
    </LoginBtn>
  );
};

export default LoginBox;
