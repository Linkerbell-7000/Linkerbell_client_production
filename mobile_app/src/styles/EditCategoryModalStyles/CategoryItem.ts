import styled from "styled-components/native";
type Props = {
  isClicked?: boolean;
};

export const CategoryTouch = styled.TouchableOpacity`
  align-items: center;
  margin-vertical: 7px;
  margin-horizontal: 2px;
  padding-vertical: 8px;
  flex: 1;
  justify-content: center;
  align-self: center;
  /*border-width: 2px;*/
  border-radius: 10px;
  border-color: grey;
`;

//${(props: Props) => (props.isnew ? "#FF5E5E" : "#686868")}
