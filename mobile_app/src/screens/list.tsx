import React, { useState, useEffect } from "react";
import _ from "lodash";
import { Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { renderCategoryName } from "../core/utils/category";
import styled from "../styles/listStyles/index";
import { Url } from "../models/UrlStateTypes";
import { ShortBar } from "../styles/ShortBar";
import TagList from "../components/TagList";
import LinkList from "../components/LinksList";
import Header from "../components/ListHeader";
import useLinkData from "../hooks/useLinkData";
import sortLink from "../core/utils/sortLink";
import EditCategoryModal from "../components/EditCategoryModal";
import EditTagModal from "../components/EditTagModal";
import DeleteLinkModal from "../components/DeleteLinkModal";
import useApp from "../hooks/useApp";
const { Container } = styled;

export type value = {
  category_name: string;
  cur_tag: string;
  tags: string[];
  cur_list: Url[];
  list: Url[];
  text: string;
  orderType: string;
};
type ListProps = {
  route: any;
};

const List = ({ route, navigation }: ListProps): JSX.Element => {
  const [value, setValue] = useState<value>({
    cur_tag: "All",
    tags: ["All"],
    list: [],
    cur_list: [],
    category_name: renderCategoryName(route.params.category_id),
    text: "",
    orderType: "asc",
  });
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEdigTagModalVisible, setEdigTagModalVisible] = useState(false);
  const [currentLinkId, setCurrentLinkId] = useState(0);
  const [currentLink, setCurrentLink] = useState<Url>();
  const [isDeleteLinkModalVisible, setDeleteLinkModalVisible] = useState(false);
  const {
    all_category_url_list,
    categories_url_list,
    all_tag_list,
    categories_tag_list,
  } = useLinkData();
  const { isDataLoading } = useApp();
  const filterLinkByTag = (list: Url[]) => {
    const { cur_tag } = value;
    if (cur_tag === "All") return list;
    else {
      return _.filter(list, (link) => _.includes(link.tags, cur_tag));
    }
  };

  const updateList = (category_id: number) => {
    let all_list;
    let list;
    let tags = ["All"];
    const { cur_tag } = value;
    if (category_id === 0) {
      all_list = all_category_url_list;
      list = sortLink(all_category_url_list, value.orderType);
      if (all_tag_list) {
        tags = ["All", ...all_tag_list];
      }
      list = filterLinkByTag(list);
    } else {
      all_list = categories_url_list[category_id];
      list = sortLink(categories_url_list[category_id], value.orderType);
      if (categories_tag_list[category_id]) {
        tags = ["All", ...categories_tag_list[category_id]];
      }
      list = filterLinkByTag(list);
    }
    setValue({ ...value, list: all_list, cur_list: list, tags });
  };
  const filterLinkBySearch = () => {
    const { list, text } = value;
    const filtered_list = filterLinkByTag(list);
    if (text.trim() !== "") {
      return filtered_list.filter((link) =>
        link.og_title.toLowerCase().includes(text.toLowerCase()),
      );
    }
    return filtered_list;
  };

  useEffect(() => {
    if (value.cur_list) {
      if (value.cur_list.length === 0) {
        if (value.tags) {
          !value.tags.includes(value.cur_tag) &&
            setValue({ ...value, cur_tag: "All" });
        }
      }
    }
  }, [value.cur_list]);

  useEffect(() => {
    const cur_list = filterLinkBySearch();
    setValue({ ...value, cur_list });
  }, [value.text]);

  useEffect(() => {
    const { list } = value;
    const cur_list = filterLinkByTag(list);
    setValue({ ...value, cur_list });
  }, [value.cur_tag]);

  useEffect(() => {
    const { category_id } = route.params;

    updateList(category_id);
    if (category_id !== 0 && !categories_url_list[category_id]) {
      !isDataLoading && navigation.navigate("Home");
    }
  }, [categories_url_list, all_category_url_list]);

  useEffect(() => {
    const { list, orderType } = value;
    let filtered_list = filterLinkByTag(list);
    if (value.text !== "") {
      filtered_list = filterLinkBySearch();
    }
    const cur_list = sortLink(filtered_list, orderType);
    setValue({ ...value, cur_list });
  }, [value.orderType]);

  useEffect(() => {
    const { category_id } = route.params;
    updateList(category_id);
  }, []);

  const handlePress = (tagName: string): void => {
    setValue({ ...value, cur_tag: tagName });
  };
  const handleTextChange = (text: string) => {
    setValue({ ...value, text });
  };
  const handleSortButton = (order: string) => {
    setValue({ ...value, orderType: order });
  };

  const handleEditCategoryModal = (id: number) => {
    setCurrentLinkId(id);
    setModalVisible(true);
  };
  const handleEditTagModal = (linkData: Url) => {
    setCurrentLink(linkData);
    setEdigTagModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const closeTagEditModal = () => {
    setEdigTagModalVisible(false);
  };
  const handleDeleteLinkModal = (linkData: Url) => {
    setCurrentLink(linkData);
    setDeleteLinkModalVisible(true);
  };
  const closeDeleteModal = () => {
    setDeleteLinkModalVisible(false);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container OS={Platform.OS}>
        <Header
          category_name={value.category_name}
          onTextChange={handleTextChange}
          ordered={value.orderType}
          onSort={handleSortButton}
          length={value.cur_list && value.cur_list.length}
        />

        <ShortBar />
        <TagList
          currentTag={value.cur_tag}
          tags={value.tags}
          onPress={handlePress}
        />
        <LinkList
          list={value.cur_list}
          onCategoryEdit={handleEditCategoryModal}
          onTagEdit={handleEditTagModal}
          onDeleteLink={handleDeleteLinkModal}
        />
        <EditCategoryModal
          isVisible={isModalVisible}
          toggleModal={closeModal}
          currentLinkId={currentLinkId}
        />
        <EditTagModal
          isVisible={isEdigTagModalVisible}
          toggleModal={closeTagEditModal}
          currentLink={currentLink}
        />
        <DeleteLinkModal
          isVisible={isDeleteLinkModalVisible}
          toggleModal={closeDeleteModal}
          currentLinkId={currentLinkId}
          currentLink={currentLink}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default List;
