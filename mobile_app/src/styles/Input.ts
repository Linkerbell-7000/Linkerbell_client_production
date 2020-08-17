import styled from "styled-components/native";

type Platform = {
  OS?: string;
};
export const InputForm = styled.TextInput`
  font-family: "NMedium";
  font-size: ${(props: Platform) => (props.OS === "ios" ? "16px" : "14px")};
  line-height: ${14 * 1.6}px;
  margin-left: 14%;
  height: ${(props: Platform) => (props.OS === "ios" ? "32px" : "46px")};
  color: ${(props) => props.theme.MainTextColor};
`;
