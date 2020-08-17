import styled from "styled-components/native";
type Props = {
  OS?: string;
};

export const TitleText = styled.Text`
  font-family: "NBold";
  color: ${(props) => props.theme.MainTextColor};
  font-size: 22px;
  line-height: ${22 * 1.6}px;
  padding: 0px;
  margin: 0px;
  margin-left: 9%;
  margin-bottom: 3%;
`;
// margin-top: ${(props: Props) => (props.OS === "ios" ? "140px" : "80px")};
