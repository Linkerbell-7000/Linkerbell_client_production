import styled from "styled-components/native";

export const EmailView = styled.View`
  margin-left: 9%;
  margin-top: 20px;
`;

export const EmailText = styled.Text`
  font-family: "NBold";
  font-size: 16px;
  color: ${(props) => props.theme.MainTextColor};
  line-height: ${18 * 1.6}px;
`;

export const Email = styled.Text`
  font-family: "NMedium";
  font-size: 16px;
  color: ${(props) => props.theme.MainTextColor};
`;

export const EditPWBtn = styled.TouchableOpacity`
  margin-left: 9%;
  margin-top: 20px;
  margin-right: 36px;
`;
