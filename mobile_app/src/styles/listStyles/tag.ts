import styled from "styled-components/native";
type Props = {
  Selected: boolean;
  Index: number;
};
export const SelectTagBtn = styled.Text`
  height: 48px;
  font-family: "NBold";
  font-size: 20px;
  line-height: ${20 * 1.8}px;
  /* margin-bottom: 10px; */
  margin-left: ${(props: Props) => (props.Index === 0 ? "0px" : "24px")};
  color: ${(props: Props) => (props.Selected ? "#000" : "#C7C7C7")};
`;
