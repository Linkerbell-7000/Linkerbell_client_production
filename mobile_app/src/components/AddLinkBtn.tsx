import React from "react";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

type Props = {
  onPress: any;
};
const AddLinkBtn = ({ onPress }: Props): JSX.Element => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <MaterialCommunityIcons name="plus" size={36} color="white" />
    </TouchableOpacity>
  );
};

export default AddLinkBtn;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-end",
    position: "absolute",
    bottom: 92,
    right: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 6,
    borderRadius: 10,
    backgroundColor: "#FFD93B",
    height: 48,
    width: 48,
    alignItems: "center",
    justifyContent: "center",
  },
});
