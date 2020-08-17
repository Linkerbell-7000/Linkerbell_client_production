import styled from "styled-components/native";

type Props = {
  isEmpty?: boolean;
  screenHeight: number;
  screenWidth: number;
};

export const Btn = styled.TouchableOpacity`
  width: ${(props: Props) => props.screenWidth * 0.8}px;
  height: ${(props: Props) => props.screenHeight * 0.06}px;

  background-color: ${(props: Props) =>
    props.isEmpty ? "#9e9e9e" : "#FFD93B"};
  border-radius: 4px;
  align-items: center;
  align-self: center;
  position: absolute;
  top: ${(props: Props) =>
    props.screenHeight ? props.screenHeight * 0.8 : 0}px;
  justify-content: center;
`;

export const BtnText = styled.Text`
  font-family: "NBold";
  font-size: 18px;
  line-height: 30px;
  color: ${(props: Props) => (props.isEmpty ? "#fff" : "#1e1e1e")};
`;
