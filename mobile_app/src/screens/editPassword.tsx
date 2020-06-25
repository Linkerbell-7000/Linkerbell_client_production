import React, { useState, useEffect } from "react";
import { Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import EditPasswordInput from "../components/EditPasswordInput";
import { EditPWType } from "../models/MyPageTypes";
import EditPWBtn from "../components/EditPWBtn";
import { style } from "../styles/SigninStyles/StyleIndex";
const { MainText, Container } = style;
import editPasswordApi from "../core/apis/editPassword";
import { validatePassword } from "../core/utils/validateEditPW";
import { StackNavigationProp } from "@react-navigation/stack";

const EditPassword = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}): JSX.Element => {
  // state를 만들어서 EditInput 에 넘겨주기
  const [value, setValue] = useState<EditPWType>({
    password: "        ",
    newPassword: "",
    newPasswordCheck: "",
    err: {},
  });

  useEffect(() => {
    validatePassword(value, setValue);
  }, [value.password, value.newPasswordCheck, value.newPassword]);

  const handlePress = async () => {
    try {
      await editPasswordApi(value.password, value.newPassword);
      await navigation.replace("Mypage");
    } catch (error) {
      console.log(error.response.status);
      if (error.response.status === 401) {
        setValue({ ...value, err: { password: "wrong password" } });
      } else if (error.response.status === 404) {
        setValue({ ...value, err: { password: "invalid token or session" } });
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <MainText OS={Platform.OS}>비밀번호 수정하기</MainText>
        <EditPasswordInput
          name="password"
          value={value}
          onChange={setValue}
          OS={Platform.OS}
        />
        <EditPasswordInput
          name="newPassword"
          value={value}
          onChange={setValue}
          OS={Platform.OS}
        />
        <EditPasswordInput
          name="newPasswordCheck"
          value={value}
          onChange={setValue}
          OS={Platform.OS}
        />
        <EditPWBtn state={value} setState={setValue} onPress={handlePress} />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default EditPassword;
