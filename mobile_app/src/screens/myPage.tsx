import React from "react";
import { View, Platform } from "react-native";
import { style } from "../styles/HomeStyles/HStyleIndex";
import { ShortBar } from "../styles/ShortBar";
import { LogOutBtn, LogOutText } from "../styles/MypageStyles./logOutBtn";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  EmailText,
  EmailView,
  Email,
  EditPWBtn,
} from "../styles/MypageStyles./EmailView";
import sendSignOutRequest from "../core/apis/logOut";
import useAuth from "../hooks/useAuth";
const { UpperText } = style;

const Mypage = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}): JSX.Element => {
  const { onLogOut, email, isOauthLogin } = useAuth();

  const onEditPassword = () => {
    navigation.navigate("EditPassword");
  };

  const handleLogOutBtnPress = async () => {
    try {
      await sendSignOutRequest();
      setTimeout(() => {
        onLogOut();
      }, 1000);
    } catch (e) {
      console.log(e);
    }
  };
  const renderAuthInfo = () => {
    if (isOauthLogin === 0) {
      return (
        <React.Fragment>
          <EmailView>
            <EmailText>{"이메일"}</EmailText>
            <Email>{email}</Email>
          </EmailView>
          <EditPWBtn onPress={onEditPassword}>
            <EmailText>{"비밀번호 수정"}</EmailText>
          </EditPWBtn>
        </React.Fragment>
      );
    }
  };
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <UpperText OS={Platform.OS}>마이페이지</UpperText>
      <ShortBar />
      {renderAuthInfo()}
      <LogOutBtn onPress={handleLogOutBtnPress}>
        <LogOutText>{"로그아웃"}</LogOutText>
      </LogOutBtn>
    </View>
  );
};

export default Mypage;
