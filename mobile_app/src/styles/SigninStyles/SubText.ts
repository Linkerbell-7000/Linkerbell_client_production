import styled, { css } from "styled-components/native";

type Props = {
  danger?: boolean;
  OS: string;
};

const calcMargin = (os: string, danger?: boolean) => {
  let margin = 20;
  if (danger) margin = 24;
  if (os === "ios") margin *= 1.6;
  return margin;
};
const renderTextColor = (color, danger) => {
  if (danger) return "#ff2222";
  else if (color === "#ffffff") {
    return color;
  } else {
    return "#000";
  }
};
const adjustMarginByOS = (os: string, danger?: boolean) => css`
  margin-top: ${calcMargin(os, danger)}px;
`;
export const SubText = styled.Text`
  font-family: "NMedium";
  background-color: transparent;
  font-size: ${(props: Props) => (props.danger === true ? "16px" : "21px")};
  line-height: ${(props: Props) =>
    props.danger === true ? `${16 * 1.6}px` : `${21 * 1.6}px`};
  margin-left: 14%;
  ${(props: Props) => adjustMarginByOS(props.OS, props.danger)};
  color: ${(props: Props) =>
    renderTextColor(props.theme.MainTextColor, props.danger)};
`;
