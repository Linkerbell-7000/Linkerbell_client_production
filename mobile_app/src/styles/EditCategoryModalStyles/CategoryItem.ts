import styled from "styled-components/native";
type Props = {
  isClicked?: boolean;
};

export const CategoryTouch = styled.TouchableOpacity`
  align-items: center;
  margin: 7px 0px;
  padding: 8px 0px;
  flex: 1;
  justify-content: center;
  align-self: center;
`;

//${(props: Props) => (props.isnew ? "#FF5E5E" : "#686868")}
