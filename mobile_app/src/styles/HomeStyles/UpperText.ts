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
  margin-left: 36px;
  margin-top: ${(props: Props) => (props.OS === "ios" ? "80px" : "80px")};
  color: #000;
`;
