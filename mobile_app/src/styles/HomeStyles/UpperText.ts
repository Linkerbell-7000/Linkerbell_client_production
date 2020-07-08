import styled from "styled-components/native";
type Props = {
  OS?: string;
};

export const UpperText = styled.Text`
  font-family: "NBold";
  font-size: 20px;
  line-height: ${20 * 1.5}px;
  padding: 0px;
  margin: 0px;
  margin-top: 24%;
  margin-left: 9%;
  color: #000;
`;
