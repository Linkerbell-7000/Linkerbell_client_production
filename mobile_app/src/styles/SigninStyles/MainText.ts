import styled from "styled-components/native";
type Props = {
  OS?: string;
};

export const MainText = styled.Text`
  font-family: "NBold";
  font-size: 24px;
  line-height: ${24 * 1.6}px;
  padding: 0px;
  margin: 0px;
  margin-top: ${(props: Props) => (props.OS === "ios" ? "80px" : "80px")};
  margin-left: 44px;
  color: #000;
`;
