import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import styled from "../styles/listStyles/index";
import SortButton from "../components/SortButton";
const { CategoryText, SearchInput, SearchContainer } = styled;

type Props = {
  category_name: string;
  ordered: string;
  onTextChange: (text: string) => void;
  onSort: (orderType: string) => void;
  length?: number;
};

const HeaderContainer = ({
  category_name,
  onTextChange,
  ordered,
  onSort,
  length,
}: Props): JSX.Element => {
  const [isSearchable, setSearchable] = useState(false);
  const handleBlur = () => {
    setSearchable(false);
    !length && onTextChange("");
  };
  const renderInput = (): JSX.Element => {
    if (!isSearchable) {
      return (
        <EvilIcons
          name="search"
          size={32}
          color="#000"
          style={{
            position: "absolute",
            backgroundColor: "transparent",
            right: 30,
            top: 6,
          }}
          onPress={() => setSearchable(true)}
        />
      );
    } else {
      return (
        <SearchContainer isSearchable={isSearchable}>
          <SearchInput
            onChangeText={(text) => onTextChange(text)}
            underlineColorAndroid="transparent"
            onBlur={handleBlur}
            autoFocus={true}
          />
          <EvilIcons
            name="search"
            size={32}
            color="#000"
            style={styles.searchIcon}
          />
        </SearchContainer>
      );
    }
  };
  return (
    <View style={styles.container}>
      <CategoryText>{category_name}</CategoryText>
      <SortButton orderType={ordered} onPress={onSort} />
      {renderInput()}
    </View>
  );
};

export default HeaderContainer;

const styles = StyleSheet.create({
  container: {
    // width: `${Number(Dimensions.get("window").width)}`,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    // paddingRight: 18,
  },
  searchIcon: {
    position: "absolute",
    backgroundColor: "transparent",
    right: 10,
  },
});
