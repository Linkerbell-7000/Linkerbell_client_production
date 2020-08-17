import styled from "styled-components/native";

type Props = {
  isEmpty?: boolean;
};
export const LinkAddBtn = styled.TouchableHighlight`
  position: absolute;
  width: 217px;
  height: 50px;
  align-self: center;
  justify-content: center;
  align-items: center;
  bottom: 60px;
  background-color: ${(props: Props) =>
    props.isEmpty ? "#9e9e9e" : "#ffd93b"};
  border-radius: 8px;
`;
