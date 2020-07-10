import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useApp from "../hooks/useApp";
type Props = {
  orderType: string;
  onPress?: any;
};
const SortButton = ({ orderType, onPress }: Props): JSX.Element => {
  const { isDarkmode } = useApp();
  const renderSortButton = () => {
    if (orderType === "asc") {
      return (
        <TouchableWithoutFeedback onPress={() => onPress("desc")}>
          <Ionicons
            name="ios-arrow-down"
            size={24}
            color={isDarkmode ? "#fff" : "#000"}
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
          color={isDarkmode ? "#fff" : "#000"}
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
