import styled from "styled-components/native";

type Props = {
  width: number;
};
export const LinkModal = styled.View`
  position: absolute;
  bottom: -30px;
  height: 330px;
  border-radius: 16px;
  width: ${(props: Props) => props.width}px;
  background-color: #fff;
  left: -20px;
`;
