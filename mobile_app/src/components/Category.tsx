/* eslint-disable react/prop-types */
import React from "react";
import { style } from "../styles/HomeStyles/HStyleIndex";
import { renderCategoryText } from "../core/utils/category";

const { CategoryText, Count, CategoryWrapper } = style;

type Props = {
  category_id: number;
  isnew: 0 | 1;
  count: number;
  onPress?: any;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const Item = ({ item, onPress }: Props): JSX.Element => {
  return (
    <CategoryWrapper
      onPress={() => {
        onPress(item.category_id);
      }}
    >
      <CategoryText>{renderCategoryText(item.category_id).emoji}</CategoryText>
      <CategoryText>{renderCategoryText(item.category_id).name}</CategoryText>
      <Count isnew={item.isnew}> {item.count} </Count>
    </CategoryWrapper>
  );
};

export default Item;
