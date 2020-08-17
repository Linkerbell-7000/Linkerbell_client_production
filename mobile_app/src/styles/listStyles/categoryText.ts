import styled from "styled-components/native";

export const CategoryText = styled.Text`
  font-family: "NBold";
  font-size: 22px;
  line-height: ${22 * 1.5}px;
  margin-left: 9%;
  color: ${(props) => props.theme.MainTextColor};
`;
