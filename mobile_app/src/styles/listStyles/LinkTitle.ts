import styled from "styled-components/native";

export const Title = styled.Text`
  font-family: "NBold";
  line-height: ${15 * 1.3}px;
  padding: 0px;
  margin-bottom: 0px;
  font-size: 15px;
  color: ${(props) => props.theme.linkTitleColor}
  letter-spacing: -0.5px;
`;
