import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import { style } from "../styles/SigninStyles/StyleIndex";
import Btn from "../components/Btn";
import RadioButtons from "../components/RadioButtons";
import AgeSelect from "../components/AgeSelect";
import useAuth from "../hooks/useAuth";
import ProfileRequest from "../core/apis/profile";
import { AuthParamList } from "../models/AuthParamList";
import { StackNavigationProp } from "@react-navigation/stack";
const { MainText, Container, SubText } = style;

/* eslint-disable @typescript-eslint/no-explicit-any */
export type UserDetailValue = {
  age?: React.ReactText;
  gender?: React.ReactText;
  policy?: boolean;
  err?: any;
  [key: string]: any;
};

const UserDetail = ({
  navigation,
}: {
  navigation: StackNavigationProp<AuthParamList, "UserDetail">;
}): JSX.Element => {
  const [value, setValue] = useState<UserDetailValue>({
    age: 0,
    gender: 0,
    policy: true,
    err: {},
  });

  const { user_id, updateProfile } = useAuth();

  const onPress = async (value: UserDetailValue): Promise<void> => {
    const { age, gender } = value;
    const data = {
      user_id,
      age,
      gender,
    };
    try {
      const res = await ProfileRequest(data);
      console.log("button clicked");
      console.log("res", res);
      updateProfile();
      navigation.navigate("Start");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <MainText>추가 정보</MainText>
        <SubText OS={Platform.OS}>나이</SubText>
        <AgeSelect value={value} setValue={setValue} />
        <SubText OS={Platform.OS}>성별</SubText>
        <RadioButtons value={value} setValue={setValue} />
        <Btn
          name="optionInfo"
          state={value}
          setState={setValue}
          onPress={onPress}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default UserDetail;
