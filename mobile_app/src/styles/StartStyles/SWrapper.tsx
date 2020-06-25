import styled from "styled-components/native";

type Props = {
  OS?: string;
};
export const Wrapper = styled.View`
  margin-top: ${(props: Props) => (props.OS === "ios" ? "160px" : "140px")};
`;

export const BtnWrapper = styled.View`
  position: relative;
  align-self: center;
  margin-top: 48px;
`;
