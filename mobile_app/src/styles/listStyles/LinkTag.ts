import styled from "styled-components/native";
type Props = {
  OS: string;
};
export const Tag = styled.Text`
  font-family: "NBold";
  margin-right: 8px;
  font-size: 12px;
  line-height: ${12 * 1.4}px;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 8px;
  padding-bottom: 2px;
  padding-top: 2px;
  color: #c5c5c5;
  min-width: 44px;
  text-align: center;
  overflow: hidden;
`;
