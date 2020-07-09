/* eslint-disable react/display-name */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
import StackNav from "./stackNav";
import BtmNav from "./bottomTabNav";
import useAuth from "../hooks/useAuth";
import useApp from "../hooks/useApp";
const renderNavigator = (isLogin: boolean) => {
  if (!isLogin) {
    return <StackNav />;
  } else {
    return <BtmNav />;
  }
};

export const Routes: React.FC = () => {
  const { isLogin } = useAuth();
  const { isDarkmode } = useApp();
  const theme = {
    backgroundColor: isDarkmode ? "#353535" : "#fff",
    MainTextColor: isDarkmode ? "#ffffff" : "#000",
    countColor: isDarkmode ? "#fff" : "#686868",
    countTextColor: isDarkmode ? "#676767;" : "#fff",
    linkTitleColor: isDarkmode ? "#FAFAFA" : "#3e3e3e",
    linkUrlColor: isDarkmode ? "#767676" : "#cbcbcb",
    tags: isDarkmode ? "#fff" : "#000",
  };

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>{renderNavigator(isLogin)}</ThemeProvider>
    </NavigationContainer>
  );
};
