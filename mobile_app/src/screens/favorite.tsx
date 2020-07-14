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
  const [isModalVisible, setModalVisible] = useState<Modals>({
    edit_tag: false,
    edit_category: false,
    delete_link: false,
  });
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
  const handleModal = (linkData: Url, modalType: string) => {
    setCurrentLink(linkData);
    if (modalType === "edit_category") {
      setModalVisible({ ...isModalVisible, edit_category: true });
    } else if (modalType === "edit_tag") {
      setModalVisible({ ...isModalVisible, edit_tag: true });
    } else if (modalType === "delete_link") {
      setModalVisible({ ...isModalVisible, delete_link: true });
    }
  };

  const closeModal = () => {
    setModalVisible({
      edit_category: false,
      edit_tag: false,
      delete_link: false,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container OS={Platform.OS}>
        <Header
          category_name="즐겨찾기"
          onTextChange={handleTextChange}
          ordered={value.orderType}
          onSort={handleSortButton}
          length={value.cur_list && value.cur_list.length}
        />

        <ShortBar />
        <LinkList list={value.cur_list} onModal={handleModal} />
        <EditCategoryModal
          isVisible={isModalVisible.edit_category}
          toggleModal={closeModal}
          currentLink={currentLink}
        />
        <EditTagModal
          isVisible={isModalVisible.edit_tag}
          toggleModal={closeModal}
          currentLink={currentLink}
        />
        <DeleteLinkModal
          isVisible={isModalVisible.delete_link}
          toggleModal={closeModal}
          currentLink={currentLink}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Favorite;
