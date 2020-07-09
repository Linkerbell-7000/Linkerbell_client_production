import styled from "styled-components/native";
type Props = {
  Selected: boolean;
  Index: number;
};
const handleColor = (selected, color) => {
  if (selected) {
    if (color === "#000") return "#000";
    else return "#fff";
  } else {
    if (color === "#000") return "#c7c7c7";
    else return "#a0a0a0";
  }
};
export const SelectTagBtn = styled.Text`
  height: 48px;
  font-family: "NBold";
  font-size: 20px;
  line-height: ${20 * 1.8}px;
  /* margin-bottom: 10px; */
  margin-left: ${(props: Props) => (props.Index === 0 ? "0px" : "24px")};
  color: ${(props: Props) => handleColor(props.Selected, props.theme.tags)};
`;
