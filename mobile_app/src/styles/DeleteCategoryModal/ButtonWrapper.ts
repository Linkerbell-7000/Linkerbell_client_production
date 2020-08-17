import styled from "styled-components/native";

type Props = {
  width: number;
};

export const ButtonWrapper = styled.View`
  position: absolute;
  flex-direction: row;
  align-self: flex-end;
  bottom: 10px;
  justify-content: space-around;
  width: 30%;
  right: 10px;
`;

// margin-top: ${(props: Props) => (props.OS === "ios" ? "140px" : "80px")};
