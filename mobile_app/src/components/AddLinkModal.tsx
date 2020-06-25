import React, { useState, useEffect } from "react";
import { Text, Dimensions } from "react-native";
import Modal from "react-native-modal";
import styled from "../styles/LinkModalStyles/index";
import postUrl from "../core/apis/postUrl";
import useServices from "../hooks/useServices";
import { _getContent } from "../core/utils/getClipboard";
import { _setContent } from "../core/utils/setClipboard";
import { validateUrl } from "../core/utils/validateUrl";
import useLinkData from "../hooks/useLinkData";
import { sliceText } from "../core/utils/sliceText";

const { LinkAddBtn, LinkModal, MainText, SubText, UrlText } = styled;
type Props = {
  isVisible: boolean;
  toggleModal: () => void;
  onReload: () => void;
};

const AddLinkModal = ({
  isVisible,
  toggleModal,
  onReload,
}: Props): JSX.Element => {
  const [text, setText] = useState("");
  const { copiedUrl } = useServices();
  const { onAddLink } = useLinkData();
  const handlePress = async () => {
    try {
      const res = await postUrl(copiedUrl);
      await onReload();
      console.log(res);
      const result = { ...res, tags: [] };
      await onAddLink(result);
      await _setContent();
      setText("");
      toggleModal();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleCopiedUrl();
  }, [isVisible]);

  const handleCopiedUrl = async () => {
    const url = await _getContent();
    if (url) {
      const result = await validateUrl(url);
      if (result) {
        setText(url);
      }
    }
  };

  const renderMessage = () => {
    if (text === "") {
      return `클립보드에 저장된 링크가 없습니다.\n링크를 복사해 주세요`;
    } else {
      return "클립보드에 저장된 링크를 추가할까요?";
    }
  };
  const renderButton = () => {
    if (text.length) {
      return (
        <LinkAddBtn onPress={handlePress}>
          <Text style={{ fontFamily: "NBold", fontSize: 17 }}>추가</Text>
        </LinkAddBtn>
      );
    } else {
      return (
        <LinkAddBtn isEmpty disabled={true}>
          <Text style={{ fontFamily: "NBold", fontSize: 17, color: "#fff" }}>
            추가
          </Text>
        </LinkAddBtn>
      );
    }
  };
  return (
    <Modal isVisible={isVisible} onBackdropPress={toggleModal}>
      <LinkModal width={Dimensions.get("window").width}>
        <MainText>{renderMessage()}</MainText>
        <UrlText>{sliceText(text, 50)}</UrlText>
        <SubText>
          북마크에 글을 추가 하시면 {"\n"}링커벨이 카테고리를 분류해 드릴게요
        </SubText>
        <React.Fragment>{renderButton()}</React.Fragment>
      </LinkModal>
    </Modal>
  );
};
export default AddLinkModal;
