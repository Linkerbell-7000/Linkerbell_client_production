/* eslint-disable react/display-name */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNav from "./stackNav";
import BtmNav from "./bottomTabNav";
import useAuth from "../hooks/useAuth";

const renderNavigator = (isLogin: boolean) => {
  if (!isLogin) {
    return <StackNav />;
  } else {
    return <BtmNav />;
  }
};

export const Routes: React.FC = () => {
  const { isLogin } = useAuth();
  return <NavigationContainer>{renderNavigator(isLogin)}</NavigationContainer>;
};
