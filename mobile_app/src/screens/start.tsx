import React, { useEffect } from "react";
import { Text, Platform, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthParamList } from "../models/AuthParamList";
import LoginBox from "../components/LoginBox";
import { styled } from "../styles/StartStyles/StyleIndex";
import useAuth from "../hooks/useAuth";
import {
  loginWithFacebookApiRequest,
  loginWithGoogleApiRequest,
} from "../core/apis/Oauth";

const {
  Container,
  LinkToSignUp,
  LinkToLabel,
  Wrapper,
  BtnWrapper,
  LinkToBox,
} = styled;
const Start = ({
  navigation,
}: {
  navigation: StackNavigationProp<AuthParamList, "Start">;
}): JSX.Element => {
  const { onOauthLogin, isLogin } = useAuth();

  useEffect(() => {
    isLogin && navigation.navigate("Home");
  }, [isLogin]);

  const handleGoogleLogin = async () => {
    try {
      const res = await loginWithGoogleApiRequest();
      console.log(res);
      if (res) {
        res.status === 200 && onOauthLogin(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const res = await loginWithFacebookApiRequest();
      console.log(res.status);
      res.status === 200 && onOauthLogin(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  const handlePressLoginBtn = (): void => {
    navigation.navigate("Signin");
  };

  const hanldePressLinkToSignUp = (): void => {
    navigation.navigate("Signup");
  };

  return (
    <Container>
      <Wrapper OS={Platform.OS}>
        <Image
          source={require("../../assets/logo.png")}
          style={{ alignSelf: "center", marginRight: 20 }}
        />
        <BtnWrapper OS={Platform.OS}>
          <LoginBox
            name="Facebook으로 로그인"
            onPress={handleFacebookLogin}
            route={"facebook"}
          />
          <LoginBox
            name="Google로 로그인"
            onPress={handleGoogleLogin}
            route={"google"}
          />
          <LoginBox
            name="이메일로 로그인"
            onPress={handlePressLoginBtn}
            route={"email"}
          />
          <LinkToSignUp onPress={hanldePressLinkToSignUp}>
            <LinkToBox>
              <Text
                style={{
                  fontSize: 14,
                  color: "#000",
                }}
              >
                아직 링커벨 회원이 아니신가요?
              </Text>
              <LinkToLabel>회원가입</LinkToLabel>
            </LinkToBox>
          </LinkToSignUp>
        </BtnWrapper>
      </Wrapper>
    </Container>
  );
};

export default Start;
