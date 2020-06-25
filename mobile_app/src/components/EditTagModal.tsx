import React, { useState, useEffect } from "react";
import _ from "lodash";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import useLinkData from "../hooks/useLinkData";
import styled from "../styles/EditTagModal/ETStyleIndex";
import editTagRequest from "../core/apis/editTag";
import { Url } from "../models/UrlStateTypes";
import Tag from "../components/EditTag";
const { TagModal, InputForm, InputWrapper, HashTag, AddBtn } = styled;

type Props = {
  isVisible: boolean;
  toggleModal: () => void;
  currentLink: Url;
};
const EditTagModal = ({
  isVisible,
  toggleModal,
  currentLink,
}: Props): JSX.Element => {
  const [tagText, setTagText] = useState("");
  const [link, setLink] = useState<Url>(currentLink);
  const { onEditTag } = useLinkData();
  const [msg, setMsg] = useState("태그를 입력해주세요");

  useEffect(() => {
    tagText !== "" && setMsg("태그를 입력해주세요");
  }, [tagText]);

  useEffect(() => {
    setLink(currentLink);
  }, [currentLink]);

  const handlePress = async () => {
    const { id, tags } = link;
    const tags_list = _.uniq([...tags, tagText]);
    const text: string = tagText.trim();
    try {
      if (tags.length === 3) {
        setMsg("태그 최대 3개");
      }
      if (tags.includes(text)) {
        setMsg("이미 존재하는 태그입니다.");
      } else {
        if (text !== "" && tags.length < 3) {
          await editTagRequest({ id, tags: tags_list });
          setLink({ ...link, tags: tags_list });
          await onEditTag(id, tags_list);
        }
      }
    } catch (e) {
      console.log(e);
    } finally {
      await setTagText("");
    }
  };
  const handleDeletePress = async (id: number, targetTag: string) => {
    const tags_list = _.filter(link.tags, (tag) => targetTag !== tag);
    try {
      await editTagRequest({ id, tags: tags_list });
      setLink({ ...link, tags: tags_list });
      onEditTag(id, tags_list);
    } catch (e) {
      console.log(e);
    }
  };
  const renderTags = () => {
    if (link && link.tags) {
      return (
        <ScrollView
          horizontal
          scrollEnabled={false}
          contentContainerStyle={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {_.map(link.tags, (tag) => (
            <Tag
              currentTag={tag}
              onDelete={handleDeletePress}
              id={link.id}
              key={tag}
            />
          ))}
        </ScrollView>
      );
    }
  };
  return (
    <Modal isVisible={isVisible} onBackdropPress={toggleModal}>
      <TagModal>
        <InputWrapper>
          <HashTag>#</HashTag>
          <InputForm
            placeholder={msg}
            placeholderTextColor="#6c6c6c"
            onChangeText={(val) => setTagText(val)}
            value={tagText}
            maxLength={7}
          />
          <TouchableOpacity onPress={handlePress}>
            <AddBtn>
              <Text
                style={{
                  alignSelf: "center",
                  lineHeight: 20,
                  marginTop: 11,
                  fontFamily: "NBold",
                }}
              >
                추가
              </Text>
            </AddBtn>
          </TouchableOpacity>
        </InputWrapper>
        <View
          style={{
            marginLeft: 28,
            marginTop: 16,
            // flexWrap: "wrap",
            // width: 200,
          }}
        >
          {renderTags()}
        </View>
      </TagModal>
    </Modal>
  );
};

export default EditTagModal;
