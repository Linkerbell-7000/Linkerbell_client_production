import React, { useState } from "react";
import { Url } from "../models/UrlStateTypes";
import { View } from "react-native";
import SwipeLink from "../components/SwipeLink";
import FavoriteBtn from "../components/FavoriteBtn";
import LinkContents from "../components/LinkContents";
import { LinkBox } from "../styles/listStyles/Linkbox";
import LinkInMenu from "../components/LinkInMenu";
type Props = {
  data: Url;
  onModal: (linkData: Url, modalType: string) => void;
};
const link = ({ data, onModal }: Props): JSX.Element => {
  const [isSwipe, setSwipe] = useState(false);

  const handleSwipe = (bool: boolean): void => {
    setSwipe(bool);
  };
  return (
    <View>
      <SwipeLink setSwipe={handleSwipe}>
        <LinkBox>
          <FavoriteBtn data={data} />
          <LinkContents data={data} isSwipe={isSwipe} />
        </LinkBox>
      </SwipeLink>
      <LinkInMenu onModal={onModal} data={data} />
    </View>
  );
};

export default link;
