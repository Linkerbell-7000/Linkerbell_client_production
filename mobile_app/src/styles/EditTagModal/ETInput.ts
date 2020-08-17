import styled from "styled-components/native";

type Platform = {
  OS?: string;
};
export const InputForm = styled.TextInput`
  font-family: "NMedium";
  font-size: 13px;
  line-height: ${13 * 1.6}px;
  margin: 0px;
  margin-left: 8px;
  width: 180px;
`;
