import styled from "styled-components/native";
type Props = {
  OS?: string;
};

export const TitleText = styled.Text`
  font-family: "NBold";
  font-size: 22px;
  line-height: ${22 * 1.6}px;
  padding: 0px;
  margin: 0px;
  margin-left: 36px;
  margin-bottom: 8px;
  color: #000;
`;
// margin-top: ${(props: Props) => (props.OS === "ios" ? "140px" : "80px")};
