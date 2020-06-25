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
  onCategoryEdit: () => void;
  onTagEdit: () => void;
  onDeleteLink: () => void;
};
const link = ({
  data,
  onCategoryEdit,
  onTagEdit,
  onDeleteLink,
}: Props): JSX.Element => {
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
      <LinkInMenu
        onCategoryEdit={onCategoryEdit}
        onTagEdit={onTagEdit}
        id={data.id}
        data={data}
        onDeleteLink={onDeleteLink}
      />
    </View>
  );
};

export default link;
