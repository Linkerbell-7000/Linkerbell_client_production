import styled from "styled-components/native";

export const _Url = styled.Text`
  font-family: "NMedium";
  margin-bottom: 12px;
  line-height: ${11 * 1.6}px;
  font-size: 11px;
  color: ${(props) => props.theme.linkUrlColor};
  letter-spacing: -0.3px;
`;
