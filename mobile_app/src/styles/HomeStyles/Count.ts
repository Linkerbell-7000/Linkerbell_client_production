import styled from "styled-components/native";

type Props = {
  OS?: string;
  isnew?: boolean;
};

export const Count = styled.Text`
  font-family: "NMedium";
  font-size: 14px;
  margin: 10px;
  margin-left: 0px;
  color: #000;
  border-radius: 12px;
  min-width: 34px;
  overflow: hidden;
  background-color: ${(props: Props) => (props.isnew ? "#FF6c6c" : "#686868")};
  border-width: 0px;
  padding: 3px;
  padding-left: 8px;
  padding-right: 10px;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  line-height: 18px;
`;
