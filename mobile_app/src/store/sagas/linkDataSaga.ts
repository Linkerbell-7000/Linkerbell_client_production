/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { all, takeLatest, put } from "redux-saga/effects";
import fetchAllListApi from "../../core/apis/fetchAllList";
import { Category_url_list, Url } from "../../models/UrlStateTypes";
import _ from "lodash";
import {
  FETCH_ALL_LIST,
  FETCH_ALL_LIST_REQUEST,
  FETCH_CATEGORIES_URL_LIST,
  CATEGORISE_FAVORITE_LIST,
  UPDATE_CATEGORIES_URL_LIST,
  CATEGORISE_TAG_LIST,
} from "../module/linkData";
import { LOAD_DATA_SUCCESS, LOAD_DATA_PENDING } from "../module/app";
export default function* authSaga() {
  yield all([
    takeLatest(FETCH_ALL_LIST_REQUEST, fetchAllList$),
    takeLatest(UPDATE_CATEGORIES_URL_LIST, updateCategoriesList$),
  ]);
}

function* fetchAllList$() {
  try {
    yield put({ type: LOAD_DATA_PENDING });
    const res = yield fetchAllListApi();
    const AllList = { ...res.data };
    yield put({ type: FETCH_ALL_LIST, payload: { AllList } });
    yield fetchList$(AllList.lists);
    yield put({ type: LOAD_DATA_SUCCESS });
  } catch (e) {
    console.log(e.response.data);
  }
}
function* updateCategoriesList$(action: any) {
  // const { AllList } = action.payload;
  try {
    const { AllList } = action.payload;
    yield fetchList$(AllList);
    const favorite_list: Url[] = [];
    yield _.forEach(AllList, (item: Url) => {
      item.favorite && favorite_list.push(item);
    });
    yield categoriseFavList(favorite_list);
  } catch (e) {
    console.log(e);
  }
}

function* fetchList$(lists: Url[]) {
  try {
    // console.log("실행");
    const categories_url_list: Category_url_list = {};
    const favorite_list: Url[] = [];
    let all_tags: string[] = [];
    const catgories_tags: { [index: number]: string[] } = {};
    yield _.forEach(lists, (item: Url) => {
      const { category_id } = item;
      item.favorite && favorite_list.push(item);

      if (categories_url_list[category_id]) {
        categories_url_list[category_id].push(item);
      } else {
        categories_url_list[category_id] = [];
        categories_url_list[category_id].push(item);
      }

      if (item.tags) {
        all_tags = [...all_tags, ...item.tags];
        if (catgories_tags[category_id]) {
          catgories_tags[category_id] = [
            ...catgories_tags[category_id],
            ...item.tags,
          ];
        } else {
          catgories_tags[category_id] = [];
          catgories_tags[category_id] = [
            ...catgories_tags[category_id],
            ...item.tags,
          ];
        }
      }
    });
    yield put({
      type: FETCH_CATEGORIES_URL_LIST,
      payload: { categories_url_list },
    });
    yield categoriseFavList(favorite_list);
    yield categoriseTagList(all_tags, catgories_tags);
  } catch (e) {
    console.log(e);
  }
}

function* categoriseFavList(favorite_list: Url[]) {
  yield put({
    type: CATEGORISE_FAVORITE_LIST,
    payload: { favorite_list },
  });
}

function* categoriseTagList(
  all_tags: string[],
  cetegories_tags: { [index: number]: string[] },
) {
  const all_tag_list = yield _.uniq(all_tags);
  const categories_tag_list: { [key: string]: string[] } = {};
  for (const key in cetegories_tags) {
    const tags: string[] = _.uniq(cetegories_tags[key]);
    categories_tag_list[key] = tags;
  }
  yield put({
    type: CATEGORISE_TAG_LIST,
    payload: { all_tag_list, categories_tag_list },
  });
}
