import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { AuthParamList } from "../models/AuthParamList";
import { StackNavigationProp } from "@react-navigation/stack";
import { Btn, BtnText } from "../styles/Btn";
const Welcome = ({
  navigation,
}: {
  navigation: StackNavigationProp<AuthParamList, "Welcome">;
}): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("UserDetail");
    }, 3000);
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
          fontSize: 40,
          lineHeight: 78,
          letterSpacing: -0.4,
          //   marginTop: 4,
        }}
      >
        🎉
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "NMedium",
          fontSize: 20,
          lineHeight: 38,
          marginBottom: 20,
          letterSpacing: -0.4,
        }}
      >{`회원가입 성공!`}</Text>
      <Text
        style={{
          textAlign: "center",
          fontFamily: "NMedium",
          fontSize: 15,
          lineHeight: 26,
          letterSpacing: -0.4,
        }}
      >{` 링커벨 회원이 되신걸 진심으로 환영합니다\n 다음은 간단한 정보를 입력하는 단계입니다`}</Text>
    </View>
  );
};

export default Welcome;
