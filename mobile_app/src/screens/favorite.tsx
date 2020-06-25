import React, { useState, useEffect } from "react";
import { Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import styled from "../styles/listStyles/index";
import { Url } from "../models/UrlStateTypes";
import { ShortBar } from "../styles/ShortBar";
import LinkList from "../components/LinksList";
import Header from "../components/ListHeader";
import sortLink from "../core/utils/sortLink";
import useLinkData from "../hooks/useLinkData";
import EditCategoryModal from "../components/EditCategoryModal";
import EditTagModal from "../components/EditTagModal";
import DeleteLinkModal from "../components/DeleteLinkModal";
const { Container } = styled;

type value = {
  cur_list: Url[];
  list: Url[];
  text: string;
  orderType: string;
};

const Favorite = (): JSX.Element => {
  const [value, setValue] = useState<value>({
    list: [],
    cur_list: [],
    text: "",
    orderType: "asc",
  });
  const [isModalVisible, setModalVisible] = useState(false);
  const [isEdigTagModalVisible, setEdigTagModalVisible] = useState(false);
  const [isDeleteLinkModalVisible, setDeleteLinkModalVisible] = useState(false);
  const [currentLinkId, setCurrentLinkId] = useState(0);
  const [currentLink, setCurrentLink] = useState<Url>();
  const { favorite_list } = useLinkData();

  useEffect(() => {
    const filterLinkBySearch = () => {
      const { list, text } = value;
      if (text !== "") {
        return list.filter((link) =>
          link.og_title.toLowerCase().includes(text.toLowerCase()),
        );
      }
      return list;
    };
    const cur_list = filterLinkBySearch();
    setValue({ ...value, cur_list });
  }, [value.text]);

  useEffect(() => {
    const { list, orderType } = value;
    const cur_list = sortLink(list, orderType);
    setValue({ ...value, cur_list });
  }, [value.orderType]);

  useEffect(() => {
    const current_list = sortLink(favorite_list, value.orderType);
    setValue({
      ...value,
      list: current_list,
      cur_list: current_list,
    });
  }, [favorite_list]);

  useEffect(() => {
    const current_list = sortLink(favorite_list, value.orderType);
    setValue({
      ...value,
      list: current_list,
      cur_list: current_list,
    });
  }, []);

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
  const handleDeleteLinkModal = (linkData: Url) => {
    setCurrentLink(linkData);
    setDeleteLinkModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const closeTagEditModal = () => {
    setEdigTagModalVisible(false);
  };
  const closeDeleteModal = () => {
    setDeleteLinkModalVisible(false);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container OS={Platform.OS}>
        <Header
          onTextChange={handleTextChange}
          category_name="즐겨찾기"
          ordered={value.orderType}
          onSort={handleSortButton}
          length={value.cur_list.length}
        />
        <ShortBar style={{ marginBottom: 48 }} />
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

export default Favorite;
