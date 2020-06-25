import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, Platform } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { style } from "../styles/HomeStyles/HStyleIndex";
import { ShortBar } from "../styles/ShortBar";
const { UpperText, TitleText, HContainer } = style;
import useLinkData from "../hooks/useLinkData";
import Item from "../components/Category";
import fetchCategoryRequest from "../core/apis/fetchCategory";
import { Category } from "../models/UrlStateTypes";
import useServices from "../hooks/useServices";
import LinkModal from "../components/AddLinkModal";
import AddLinkBtn from "../components/AddLinkBtn";
import { _getContent } from "../core/utils/getClipboard";
import { validateUrl } from "../core/utils/validateUrl";
import sortCategory from "../core/utils/sortCategory";
import useAuth from "../hooks/useAuth";
const Home = ({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}): JSX.Element => {
  const [data, setData] = useState<Category[]>([]);
  const { onHome, categories } = useLinkData();
  const [isModalVisible, setModalVisible] = useState(false);
  const { getCopiedUrl, copiedUrl } = useServices();
  const { isOauthLogin } = useAuth();
  const handleAllListbtnPress = () => {
    navigation.navigate("List", { category_id: 0 });
  };
  const onPress = (category_id: number) => {
    navigation.navigate("List", { category_id });
  };

  const getCategoryList = async () => {
    const categories = await fetchCategoryRequest();
    await sortCategory(categories);
    onHome(categories);
  };

  useEffect(() => {
    isOauthLogin && getCategoryList();
    setData(categories);
  }, []);

  useEffect(() => {
    setData(categories);
    // console.log("onHOME", categories);
  }, [categories]);

  useFocusEffect(() => {
    checkClipboard();
  });

  const checkClipboard = async (): Promise<void> => {
    try {
      const content = await _getContent();
      if (copiedUrl !== content) {
        if (validateUrl(content)) {
          getCopiedUrl(content);
          setModalVisible(true);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useFocusEffect(() => {
    checkClipboard();
  });

  const handleAddLinkBtn = () => {
    setModalVisible(true);
  };

  return (
    <React.Fragment>
      <HContainer>
        <UpperText onPress={handleAllListbtnPress} OS={Platform.OS}>
          🗄 전체 글 보기
        </UpperText>
        <ShortBar />
        <TitleText>카테고리</TitleText>
        <FlatList
          keyExtractor={(item) => item.category_id.toString()}
          data={data}
          renderItem={({ item }) => <Item item={item} onPress={onPress} />}
          showsVerticalScrollIndicator={false}
          style={styles.listContainer}
        />
        <AddLinkBtn onPress={handleAddLinkBtn} />
      </HContainer>

      <LinkModal
        isVisible={isModalVisible}
        toggleModal={closeModal}
        onReload={getCategoryList}
      />
    </React.Fragment>
  );
};

export default Home;

const styles = StyleSheet.create({
  listContainer: {
    marginBottom: 75,
    position: "relative",
  },
});
