import React from "react";
import { FlatList } from "react-native";
import { SelectTagBtn } from "../styles/listStyles/tag";
// import { Url } from "../models/UrlStateTypes";

type Props = {
  currentTag: string;
  tags: string[];
  onPress: (item: string) => void;
};
const TagItem = ({ currentTag, tags, onPress }: Props): JSX.Element => {
  return (
    <FlatList
      data={tags}
      renderItem={({ item, index }) => (
        <SelectTagBtn
          Selected={item === currentTag ? true : false}
          Index={index}
          onPress={() => onPress(item)}
        >
          {index === 0 ? item : `#${item}`}
        </SelectTagBtn>
      )}
      keyExtractor={(item) => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginLeft: 36, marginBottom: 44, flexGrow: 0, height: 40 }}
    />
  );
};
export default TagItem;
