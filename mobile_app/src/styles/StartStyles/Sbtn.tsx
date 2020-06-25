import styled from "styled-components/native";

type Props = {
  OS: string;
  route: "google" | "email" | "facebook";
};
const renderLoginBtn = (route: string) => {
  let backgroundColor = "#fff";
  if (route === "facebook") backgroundColor = "#3875EA";
  if (route === "email") backgroundColor = "#FFD93B";
  return backgroundColor;
};
export const LoginBtn = styled.TouchableOpacity`
  width: 320px;
  height: 50px;
  margin-top: 24px;
  border-width: 2px;
  background-color: ${(props: Props) => renderLoginBtn(props.route)};
  border: 2px;
  border-radius: 8px;
  border: ${(props: Props) =>
    props.route === "google" ? "#b4b4b4 1px" : "0px"};
  align-items: center;
  justify-content: center;
`;
export const LoginLabel = styled.Text`
  font-family: "NMedium";
  font-size: 16px;
  color: ${(props: Props) => (props.route === "facebook" ? "#fff" : "#000")};
`;
export const LinkToBox = styled.View`
  flex-direction: row;
  margin-top: 28px;
  align-self: center;
  justify-content: center;
`;
export const LinkToSignUp = styled.TouchableWithoutFeedback`
  color: #000;
`;
export const LinkToLabel = styled.Text`
  font-family: "NBold";
  margin-left: 10px;
  font-size: 14px;
  line-height: ${14 * 1.4}px;
  color: #000;
`;
