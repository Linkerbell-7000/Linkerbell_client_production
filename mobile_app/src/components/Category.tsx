/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { style } from "../styles/HomeStyles/HStyleIndex";
import { renderCategoryText } from "../core/utils/category";

const { CategoryText, Count } = style;

type Props = {
  category_id: number;
  isnew: 0 | 1;
  count: number;
  onPress?: any;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Item = ({ item, onPress }: Props): JSX.Element => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onPress(item.category_id);
      }}
    >
      <CategoryText>{renderCategoryText(item.category_id).emoji}</CategoryText>
      <CategoryText>{renderCategoryText(item.category_id).name}</CategoryText>
      <Count isnew={item.isnew}> {item.count} </Count>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    flexWrap: "wrap",
    marginLeft: 36,
    height: 72,
  },
});
