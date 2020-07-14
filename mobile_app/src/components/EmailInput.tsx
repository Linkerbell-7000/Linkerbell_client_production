import React, { useEffect } from "react";
import { Platform } from "react-native";
import { FindPWType } from "../screens/verifyEmail";
import { InputForm } from "../styles/Input";
import { InputWrapper } from "../styles/InputWrapper";
import { style } from "../styles/SigninStyles/StyleIndex";
const { SubText } = style;

type stringOrNull = string | null;
type InputProps = {
  onChange: React.Dispatch<React.SetStateAction<FindPWType>>;
  value: FindPWType;
  OS: any;
};
type err = {
  email: stringOrNull;
  [key: string]: null | string;
};

const EmailInput = ({ onChange, value }: InputProps): JSX.Element => {
  const inputTitle = "이메일";
  const placeholderKeyword = `가입한 ${inputTitle}을 입력해주세요`;

  const renderSubText = (err: err): JSX.Element => {
    let text = inputTitle;
    if (err.email === "wrong email") {
      text = "존재하지 않는 이메일입니다";
      return (
        <SubText danger={true} OS={Platform.OS}>
          {text}
        </SubText>
      );
    } else if (err.email === "check email") {
      text = "이메일 인증이 필요한 계정입니다";
      return (
        <SubText danger={true} OS={Platform.OS}>
          {text}
        </SubText>
      );
    } else {
      return <SubText OS={Platform.OS}>{text}</SubText>;
    }
  };

  const checkEmail = () => {
    const err = { ...value.err };
    if (value.email.length === 0) {
      err.email = "empty email";
    } else {
      delete err.email;
    }
    onChange({ ...value, err });
  };

  return (
    <InputWrapper>
      {renderSubText(value.err)}
      <InputForm
        autoCapitalize="none"
        OS={Platform.OS}
        placeholder={`${placeholderKeyword}`}
        // onChangeText={(val) => onChange({ ...value, [name]: val })}
        onBlur={() => checkEmail()}
      ></InputForm>
    </InputWrapper>
  );
};

export default EmailInput;
