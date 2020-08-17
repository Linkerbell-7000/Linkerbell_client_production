/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import _ from "lodash";
import {
  ListState,
  Category,
  ResponUrlRequest,
  Category_url_list,
  Url,
} from "../../models/UrlStateTypes";

//1. 액션
export const FETCH_CATEGORY_DATA = "FETCH_CATEGORY_DATA" as const;
export const FETCH_ALL_LIST = "FETCH_ALL_LIST" as const;
export const FETCH_ALL_LIST_REQUEST = "FETCH_ALL_LIST_REQUEST" as const;
export const FETCH_CATEGORIES_URL_LIST = "FETCH_CATEGORIES_URL_LIST" as const;
export const UPDATE_CATEGORIES_URL_LIST = "UPDATE_CATEGORIES_URL_LIST" as const;
export const CATEGORISE_FAVORITE_LIST = "CATEGORISE_FAVORITE_LIST" as const;
export const HANDLE_URL_FAVORITE = "HANDLE_URL_FAVORITE" as const;
export const EDIT_LINK_CATEGORY = "EDIT_LINK_CATEGORY" as const;
export const EDIT_TAG = "EDIT_TAG" as const;
export const DELETE_LINK = "DELETE_LINK" as const;
export const CATEGORISE_TAG_LIST = "CATEGORISE_TAG_LIST" as const;
export const ADD_LINK = "ADD_LINK" as const;
export const INIT_LINK_DATA = "INIT_LINK_DATA" as const;
//2 .생성자 (영수증)
export const fetchCategories = (categoryData: Category[]) => ({
  type: FETCH_CATEGORY_DATA,
  payload: { categoryData },
});
export const fetchAllListRequest = () => ({
  type: FETCH_ALL_LIST_REQUEST,
});

export const fetchAllUrlList = (AllList: ResponUrlRequest) => ({
  type: FETCH_ALL_LIST,
  payload: { AllList },
});
export const fetchCategoriesUrlList = (
  categories_url_list: Category_url_list,
) => ({
  type: FETCH_CATEGORIES_URL_LIST,
  payload: { categories_url_list },
});
export const categoriesFavList = (favorite_list: Url[]) => ({
  type: CATEGORISE_FAVORITE_LIST,
  payload: { favorite_list },
});
export const handleUrlFavorite = (item: Url) => ({
  type: HANDLE_URL_FAVORITE,
  payload: { item },
});
export const updateCategoriesList = (AllList: Url[]) => ({
  type: UPDATE_CATEGORIES_URL_LIST,
  payload: { AllList },
});
//바굴
export const editCategory = (id: number, category_id: number) => ({
  type: EDIT_LINK_CATEGORY,
  payload: { id, category_id },
});

export const editTag = (id: number, tags: string[]) => ({
  type: EDIT_TAG,
  payload: { id, tags },
});

export const deleteLink = (id: number) => ({
  type: DELETE_LINK,
  payload: { id },
});

export const addLink = (linkData: Url) => ({
  type: ADD_LINK,
  payload: { linkData },
});
export const categoriseTagList = (
  all_tag_list: string[],
  categories_tag_list: { [key: string]: string[] },
) => ({
  type: CATEGORISE_TAG_LIST,
  payload: { all_tag_list, categories_tag_list },
});

export const initiallizeLinkData = () => ({
  type: INIT_LINK_DATA,
});
export const initialLinkDataState: ListState = {
  categories: [],
  categories_url_list: {},
  all_category_url_list: [],
  all_tag_list: [],
  categories_tag_list: {},
  favorite_list: [],
};

export type linkActions =
  | ReturnType<typeof fetchCategories>
  | ReturnType<typeof fetchAllListRequest>
  | ReturnType<typeof fetchAllUrlList>
  | ReturnType<typeof fetchCategoriesUrlList>
  | ReturnType<typeof updateCategoriesList>
  | ReturnType<typeof categoriesFavList>
  | ReturnType<typeof handleUrlFavorite>
  | ReturnType<typeof editCategory>
  | ReturnType<typeof editTag>
  | ReturnType<typeof deleteLink>
  | ReturnType<typeof categoriseTagList>
  | ReturnType<typeof addLink>
  | ReturnType<typeof initiallizeLinkData>;

const reducer = (state = initialLinkDataState, action: linkActions) => {
  switch (action.type) {
    case FETCH_CATEGORY_DATA: {
      return { ...state, categories: action.payload.categoryData };
    }
    case FETCH_ALL_LIST: {
      const { lists, tag_list } = action.payload.AllList;
      return { ...state, all_category_url_list: lists, all_tag_list: tag_list };
    }
    case FETCH_CATEGORIES_URL_LIST: {
      const { categories_url_list } = action.payload;
      return { ...state, categories_url_list };
    }
    case CATEGORISE_FAVORITE_LIST: {
      const { favorite_list } = action.payload;
      return { ...state, favorite_list };
    }
    case HANDLE_URL_FAVORITE: {
      const { item } = action.payload;
      const current_All_category_url_list = _.map(
        state.all_category_url_list,
        (urlData) =>
          urlData.id === item.id
            ? { ...urlData, favorite: !urlData.favorite }
            : urlData,
      );
      return { ...state, all_category_url_list: current_All_category_url_list };
    }
    case EDIT_LINK_CATEGORY: {
      const { id, category_id } = action.payload;
      const current_All_category_url_list = _.map(
        state.all_category_url_list,
        (link) =>
          link.id === id ? { ...link, category_id: category_id } : link,
      );
      return { ...state, all_category_url_list: current_All_category_url_list };
    }
    case EDIT_TAG: {
      const { tags, id } = action.payload;
      const current_All_category_url_list = _.map(
        state.all_category_url_list,
        (urlData) => (urlData.id === id ? { ...urlData, tags: tags } : urlData),
      );
      return { ...state, all_category_url_list: current_All_category_url_list };
    }
    case DELETE_LINK: {
      const { id } = action.payload;
      const current_All_category_url_list = _.filter(
        state.all_category_url_list,
        (link) => link.id !== id,
      );
      return { ...state, all_category_url_list: current_All_category_url_list };
    }
    case CATEGORISE_TAG_LIST: {
      const { all_tag_list, categories_tag_list } = action.payload;
      return { ...state, all_tag_list, categories_tag_list };
    }
    case ADD_LINK: {
      const { linkData } = action.payload;
      const current_All_category_url_list = [
        ...state.all_category_url_list,
        linkData,
      ];
      return { ...state, all_category_url_list: current_All_category_url_list };
    }
    case INIT_LINK_DATA: {
      return { ...initialLinkDataState };
    }
    default:
      return state;
  }
};
export default reducer;
