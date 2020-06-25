import styled from "styled-components/native";

type Props = {
  width: number;
};

export const CategoryModal = styled.View`
  flex: 1;
  position: absolute;
  align-self: center;
  justify-content: center;
  height: 70%;
  border-radius: 16px;
  width: 98%;
  background-color: #fff;
`;

// margin-top: ${(props: Props) => (props.OS === "ios" ? "140px" : "80px")};
