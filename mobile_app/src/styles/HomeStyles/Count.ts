import styled from "styled-components/native";

type Props = {
  OS?: string;
  isnew?: boolean;
};
const handleBackgroundColor = (isNew, color) => {
  if (isNew) return "#FF6c6c";
  else {
    if (color === "#686868") return "#686868";
    else return "#fff";
  }
};
export const Count = styled.Text`
  font-family: "NBold";
  font-size: 14px;
  margin: 10px;
  margin-left: 0px;
  color: ${(props) => props.theme.countTextColor};
  border-radius: 12px;
  min-width: 34px;
  overflow: hidden;
  background-color: ${(props: Props) =>
    handleBackgroundColor(props.isnew, props.theme.countColor)};
  border-width: 0px;
  padding: 3px;
  padding-left: 8px;
  padding-right: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 18px;
`;
