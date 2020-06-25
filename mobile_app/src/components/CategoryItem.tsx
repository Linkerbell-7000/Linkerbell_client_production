import React from "react";
import useLinkData from "../hooks/useLinkData";
import editCategoryApi from "../core/apis/editCategory";
import styled from "../styles/EditCategoryModalStyles/index";
import fetchCategoryRequest from "../core/apis/fetchCategory";
import sortCategory from "../core/utils/sortCategory";

const { CategoryTouch, NameText, Emoji } = styled;

type Props = {
  item: {
    id: number;
    name: string;
    emoji: string;
  };
  linkId: number;
  closeModal: () => void;
};

const CategoryItem = ({ linkId, item, closeModal }: Props): JSX.Element => {
  const { onEditCategory, onHome } = useLinkData();
  const category_id = item.id;

  const handlePress = async () => {
    try {
      onEditCategory(linkId, category_id);
      await editCategoryApi(linkId, category_id)
      closeModal();
      const categories = await fetchCategoryRequest();
      await sortCategory(categories);
      onHome(categories);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CategoryTouch onPress={handlePress} item={item}>
      <Emoji>{item.emoji}</Emoji>
      <NameText>{item.name}</NameText>
    </CategoryTouch>
  );
};

export default CategoryItem;
