import styled from "styled-components/native";

type Props = {
  OS?: string;
  isnew?: boolean;
};

export const CategoryWrapper = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  margin-left: 10%;
  /* height: 11%; */
  margin-bottom: 5%;
`;
