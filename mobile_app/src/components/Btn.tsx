import React from "react";
import { Dimensions } from "react-native";
import { Btn, BtnText } from "../styles/Btn";
import { LoginValue } from "../models/LoginTypes";
import { UserDetailValue } from "../screens/userDetail";

type Props = {
  state: LoginValue | UserDetailValue;
  setState: React.Dispatch<React.SetStateAction<LoginValue>>;
  name: string;
  onPress?: any;
};

const LoginBtn = ({ state, name, onPress }: Props): JSX.Element => {
  const renderBtnText = () => {
    if (name === "signin") return "로그인";
    if (name === "signup") return "회원가입";
    if (name === "optionInfo") return "완료";
  };
  const renderBtn = () => {
    // eslint-disable-next-line react/prop-types
    const { err } = state;
    if (Object.keys(err).length === 0) {
      return (
        <Btn
          onPress={() => onPress(state)}
          height={Dimensions.get("window").height}
        >
          <BtnText>{renderBtnText()}</BtnText>
        </Btn>
      );
    }
    return (
      <Btn isEmpty disabled={true} height={Dimensions.get("window").height}>
        <BtnText isEmpty>{renderBtnText()}</BtnText>
      </Btn>
    );
  };
  return <React.Fragment>{renderBtn()}</React.Fragment>;
};
export default LoginBtn;
