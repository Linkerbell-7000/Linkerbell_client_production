import styled from "styled-components/native";

type Props = {
  width: number;
};
export const LinkModal = styled.View`
  position: absolute;
  bottom: -4%;
  flex: 1;
  margin: 0px;
  padding: 0px;
  height: 45%;
  border-radius: 16px;
  width: ${(props: Props) => props.width}px;
  background-color: #fff;
`;
