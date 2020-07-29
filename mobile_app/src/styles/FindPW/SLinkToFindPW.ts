import styled from "styled-components/native";

type Props = {
  screenHeight: number;
};

export const LinkToFindPW = styled.TouchableOpacity`
  color: #000;
  top: ${(props: Props) =>
    props.screenHeight ? props.screenHeight * 0.48 : 0}px;
`;
export const FindPWText = styled.Text`
  font-family: "NBold";
  margin-left: 60px;
  font-size: 14px;
  line-height: ${14 * 1.4}px;
  color: ${(props) => props.theme.MainTextColor};
`;
