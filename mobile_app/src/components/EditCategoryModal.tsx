import React from "react";
import { FlatList } from "react-native";
import Modal from "react-native-modal";
import CategoryItem from "../components/CategoryItem";

import styled from "../styles/EditCategoryModalStyles/index";

const { CategoryModal, Title } = styled;
const categoryList = [
  { id: 1, name: "문화·예술", emoji: "🎨" },
  { id: 7, name: "음식", emoji: "🥘" },
  { id: 8, name: "여행", emoji: "🏝" },
  { id: 10, name: "취미", emoji: "🤸‍♀️" },
  { id: 19, name: "패션", emoji: "🛍️" },
  { id: 18, name: "쇼핑", emoji: "👗" },
  { id: 11, name: "리빙", emoji: "🏡" },
  { id: 9, name: "건강", emoji: "💪" },
  { id: 13, name: "뉴스", emoji: "🗞️" },
  { id: 14, name: "사회", emoji: "🏙" },
  { id: 3, name: "비즈니스", emoji: "💼" },
  { id: 6, name: "금융·부동산", emoji: "📈" },
  { id: 16, name: "컴퓨터·IT", emoji: "💻" },
  { id: 17, name: "과학", emoji: "🧪" },
  { id: 12, name: "법률·정치", emoji: "⚖️" },
  { id: 4, name: "교육·Job", emoji: "📚" },
  { id: 20, name: "스포츠", emoji: "⚽️" },
  { id: 2, name: "자동차", emoji: "🚙" },
  { id: 5, name: "가족", emoji: "👨‍👩‍👧‍👦" },
  { id: 15, name: "종교", emoji: "🙏" },
];
const numColumns = 4;
type Props = {
  isVisible: boolean;
  toggleModal: () => void;
  currentLinkId: number;
};

const EditCategoryModal = ({
  isVisible,
  toggleModal,
  currentLinkId,
}: Props): JSX.Element => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toggleModal}
      style={{ justifyContent: "center" }}
    >
      <CategoryModal>
        <Title>변경할 카테고리를 선택하세요.</Title>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={categoryList}
          renderItem={({ item }) => (
            <CategoryItem
              item={item}
              linkId={currentLinkId}
              closeModal={toggleModal}
            />
          )}
          numColumns={numColumns}
          style={{
            width: "86%",
            alignSelf: "center",
            marginTop: 5,
          }}
        />
      </CategoryModal>
    </Modal>
  );
};

export default EditCategoryModal;
