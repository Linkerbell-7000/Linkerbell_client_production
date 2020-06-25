import React from "react";

import { Tag } from "../styles/EditTagModal/ETTag";
import { TagWrapper } from "../styles/EditTagModal/ETTagWrapper";
import { MaterialIcons } from "@expo/vector-icons";
type Props = {
  currentTag: string;
  id: number;
  onDelete: (id: number, targetTag: string) => void;
};
const EditTag = ({ currentTag, id, onDelete }: Props): JSX.Element => {
  return (
    <TagWrapper onPress={() => onDelete(id, currentTag)}>
      <Tag>{`# ${currentTag}`}</Tag>
      <MaterialIcons name="cancel" size={16} color="#7b7b7b" />
    </TagWrapper>
  );
};

export default EditTag;
