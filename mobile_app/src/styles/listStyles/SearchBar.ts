import styled from "styled-components/native";

type Props = {
  isSearchable: boolean;
};

export const SearchInput = styled.TextInput`
  flex: 1;
  padding-left: 10px;
  background-color: transparent;
  margin-left: 10px;
  font-size: 13px;
  max-width: 90px;
`;

export const SearchContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  position: absolute;
  background-color: #f7f7f7;
  border-radius: 11px;
  height: 36px;
  top: 2px;
  right: 20px;
  width: 140px;
  max-width: 140px;
  width: ${(props: Props) => (props.isSearchable ? "140px" : "0px")};
  max-width: ${(props: Props) => (props.isSearchable ? "140px" : "0px")};
`;

// background-color: ${(props: Props) =>
//     props.isClicked ? "#fafafa" : "transparent"};
