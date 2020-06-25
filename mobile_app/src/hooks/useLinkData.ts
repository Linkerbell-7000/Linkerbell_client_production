/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/module/index";
import {
  fetchCategories,
  fetchAllListRequest,
  handleUrlFavorite,
  updateCategoriesList,
  editCategory,
  editTag,
  deleteLink,
  addLink,
} from "../store/module/linkData";
import { useCallback } from "react";

export default function useLinkData() {
  const categories = useSelector(
    (state: RootState) => state.linkData.categories,
  );
  const all_category_url_list = useSelector(
    (state: RootState) => state.linkData.all_category_url_list,
  );
  const all_tag_list = useSelector(
    (state: RootState) => state.linkData.all_tag_list,
  );
  const categories_url_list = useSelector(
    (state: RootState) => state.linkData.categories_url_list,
  );
  const favorite_list = useSelector(
    (state: RootState) => state.linkData.favorite_list,
  );
  const categories_tag_list = useSelector(
    (state: RootState) => state.linkData.categories_tag_list,
  );

  const dispatch = useDispatch();

  const onHome = useCallback(
    (categoryData) => {
      dispatch(fetchCategories(categoryData));
    },
    [dispatch],
  );
  const fetchAllList = useCallback(() => {
    dispatch(fetchAllListRequest());
  }, [dispatch]);
  const onFavoriteBtnPress = useCallback(
    (id) => {
      dispatch(handleUrlFavorite(id));
    },
    [dispatch],
  );
  const updateCategoriesUrlList = useCallback(
    (list) => dispatch(updateCategoriesList(list)),
    [dispatch],
  );
  const onEditCategory = useCallback(
    (id, category_id) => dispatch(editCategory(id, category_id)),
    [dispatch],
  );
  const onEditTag = useCallback(
    (id, tag) => {
      dispatch(editTag(id, tag));
    },
    [dispatch],
  );
  const onDeleteLink = useCallback((id) => dispatch(deleteLink(id)), [
    dispatch,
  ]);
  const onAddLink = useCallback(
    (linkData) => {
      dispatch(addLink(linkData));
    },
    [dispatch],
  );

  return {
    categories,
    all_category_url_list,
    all_tag_list,
    onHome,
    fetchAllList,
    favorite_list,
    categories_url_list,
    onFavoriteBtnPress,
    updateCategoriesUrlList,
    onEditCategory,
    onDeleteLink,
    onEditTag,
    categories_tag_list,
    onAddLink,
  };
}
