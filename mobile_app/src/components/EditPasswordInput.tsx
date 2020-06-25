import React, { useEffect } from "react";
import { Platform } from "react-native";
import { EditPWType } from "../models/MyPageTypes";
import { InputForm } from "../styles/Input";
import { InputWrapper } from "../styles/InputWrapper";
import { style } from "../styles/SigninStyles/StyleIndex";
const { SubText } = style;

type stringOrNull = string | null;
type InputProps = {
  name: string;
  onChange: React.Dispatch<React.SetStateAction<EditPWType>>;
  value: EditPWType;
  OS: any;
};
type err = {
  password: stringOrNull;
  newPassword: stringOrNull;
  newPasswordCheck: stringOrNull;
  [key: string]: null | string;
};

const EditPasswordInput = ({
  name,
  onChange,
  value,
}: InputProps): JSX.Element => {
  const inputTitle = name === "password" ? "현재 비밀번호" : "새 비밀번호";
  const placeholderKeyword = `${inputTitle}를`;
  const signUpPlaceholder = `${placeholderKeyword} ${
    name === "newPasswordCheck" ? "다시 " : ""
  }`;

  useEffect(() => {
    deleteError();
  }, [value.newPasswordCheck]);

  const deleteError = () => {
    if (name === "newPasswordCheck") {
      delete value.err.newPasswordCheck;
    }
  };

  const renderSubText = (err: err): JSX.Element => {
    let text = inputTitle;
    if (name in err) {
      if (name === "password") {
        if (err[name] === "empty password") {
          text = "비밀번호를 입력해주세요";
        } else if (err[name] === "wrong password") {
          text = "잘못된 비밀번호입니다";
        } else if (err[name] === "invalid token or session") {
          text = "재로그인이 필요합니다";
        }
        return (
          <SubText danger={true} OS={Platform.OS}>
            {text}
          </SubText>
        );
      } else if (
        name === "newPasswordCheck" &&
        err[name] === "unmatched password"
      ) {
        text = "비밀번호가 다릅니다";
        return (
          <SubText danger={true} OS={Platform.OS}>
            {text}
          </SubText>
        );
      }
    }

    return (
      <SubText OS={Platform.OS}>
        {name === "newPasswordCheck" ? text + " 확인" : text}
      </SubText>
    );
  };

  const checkPassword = () => {
    if (name === "password") {
      const err = { ...value.err };
      if (value.password.length === 0) {
        err.password = "empty password";
      } else {
        delete err.password;
      }
      onChange({ ...value, err });
    }
  };

  const checkNewPassword = () => {
    const newPasswordCheck = value.newPasswordCheck
      ? value.newPasswordCheck
      : "";
    if (name === "newPasswordCheck" && newPasswordCheck.length >= 8) {
      const err = { ...value.err };
      if (newPasswordCheck !== value.newPassword) {
        err.newPasswordCheck = "unmatched password";
      } else {
        delete err.newPassword;
        delete err.newPasswordCheck;
      }
      onChange({ ...value, err });
    }
  };

  return (
    <InputWrapper>
      {renderSubText(value.err)}
      <InputForm
        autoCapitalize="none"
        OS={Platform.OS}
        placeholder={`${signUpPlaceholder} 입력해주세요 (8자 이상)`}
        onChangeText={(val) => onChange({ ...value, [name]: val })}
        onBlur={() =>
          name === "newPasswordCheck" || name === "newPassword"
            ? checkNewPassword()
            : checkPassword()
        }
        secureTextEntry
      ></InputForm>
    </InputWrapper>
  );
};

export default EditPasswordInput;
