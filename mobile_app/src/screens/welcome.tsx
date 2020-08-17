import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { AuthParamList } from "../models/AuthParamList";
import { StackNavigationProp } from "@react-navigation/stack";
import { Btn, BtnText } from "../styles/Btn";
import useAuth from "../hooks/useAuth";
const Welcome = ({
  navigation,
}: {
  navigation: StackNavigationProp<AuthParamList, "Welcome">;
}): JSX.Element => {
  const { onLogOut } = useAuth();
  useEffect(() => {
    setTimeout(() => {
      onLogOut();
      navigation.replace("Start");
    }, 5000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontFamily: "NMedium",
          fontSize: 15,
          lineHeight: 26,
          letterSpacing: -0.4,
        }}
      >{` 가입하신 이메일로 회원가입 확인 링크를 보냈습니다.\n 확인 후 링커벨 로그인이 가능합니다`}</Text>
    </View>
  );
};

export default Welcome;
