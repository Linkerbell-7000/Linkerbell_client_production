import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
type Props = {
  orderType: string;
  onPress?: any;
};
const SortButton = ({ orderType, onPress }: Props): JSX.Element => {
  const renderSortButton = () => {
    if (orderType === "asc") {
      return (
        <TouchableWithoutFeedback onPress={() => onPress("desc")}>
          <Ionicons
            name="ios-arrow-down"
            size={24}
            color="black"
            style={{ marginLeft: 12, paddingTop: 4 }}
          />
        </TouchableWithoutFeedback>
      );
    }
    return (
      <TouchableWithoutFeedback onPress={() => onPress("asc")}>
        <Ionicons
          name="ios-arrow-up"
          size={24}
          color="black"
          style={{
            marginLeft: 12,
            paddingTop: 4,
            width: 30,
          }}
          onPress={() => onPress("desc")}
        />
      </TouchableWithoutFeedback>
    );
  };
  return renderSortButton();
};
export default SortButton;
