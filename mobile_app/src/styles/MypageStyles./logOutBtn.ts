import styled from "styled-components/native";

export const LogOutBtn = styled.TouchableOpacity`
  margin-left: 9%;
  margin-top: 24px;
  /* background-color: red; */
`;

export const LogOutText = styled.Text`
  font-family: "NBold";
  font-size: 16px;
  color: ${(props) => props.theme.MainTextColor}
  line-height: ${18 * 1.6}px;
`;
