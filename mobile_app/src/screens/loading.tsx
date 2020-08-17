import React, { useEffect } from "react";
import { View, Image } from "react-native";
import useAuth from "../hooks/useAuth";
import { AuthParamList } from "../models/AuthParamList";
import { StackNavigationProp } from "@react-navigation/stack";
const Loading = ({
  navigation,
}: {
  navigation: StackNavigationProp<AuthParamList, "Start">;
}): JSX.Element => {
  const { onLogin, err } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      onLogin({});
    }, 800);
  }, []);
  useEffect(() => {
    err !== "" && navigation.replace("Start");
  }, [err]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={require("../../assets/logo_large.png")}
        style={{ alignSelf: "center", marginRight: 20 }}
      />
    </View>
  );
};

export default Loading;
