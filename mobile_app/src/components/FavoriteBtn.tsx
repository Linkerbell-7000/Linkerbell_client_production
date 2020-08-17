import React from "react";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import useLinkData from "../hooks/useLinkData";
import { AntDesign } from "@expo/vector-icons";
import { Url } from "../models/UrlStateTypes";
import sendFavoriteRequest from "../core/apis/favorite";

type Props = {
  data: Url;
};

const FavoriteBtn = ({ data }: Props): JSX.Element => {
  const { onFavoriteBtnPress } = useLinkData();

  const handleFavoriteBtnPress = async (linkData: Url) => {
    const { id, favorite } = linkData;
    try {
      sendFavoriteRequest(id, favorite);
      await onFavoriteBtnPress(linkData);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => handleFavoriteBtnPress(data)}
      style={{ width: 68, height: 52 }}
    >
      <AntDesign
        name={data.favorite ? "star" : "staro"}
        size={20}
        style={{
          position: "relative",
          left: 24,
          width: 40,
          height: 40,
          top: 15,
          color: `${data.favorite ? "#ffd93b" : "#dedede"}`,
        }}
      />
    </TouchableWithoutFeedback>
  );
};
export default FavoriteBtn;
