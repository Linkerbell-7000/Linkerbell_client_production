import styled from "styled-components/native";

type Platform = {
  OS?: string;
};
export const InputForm = styled.TextInput`
  font-family: "NMedium";
  font-size: ${(props: Platform) => (props.OS === "ios" ? "16px" : "14px")};
  line-height: ${14 * 1.6}px;
  padding: 0px;
  margin: 0px;
  margin-top: ${(props: Platform) => (props.OS === "ios" ? "0px" : "0px")};
  margin-left: 56px;
  border-width: 0px;
  height: ${(props: Platform) => (props.OS === "ios" ? "32px" : "46px")};
`;
