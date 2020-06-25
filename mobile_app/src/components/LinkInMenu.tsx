import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const LinkInMenu = ({
  onCategoryEdit,
  onTagEdit,
  id,
  data,
  onDeleteLink,
}): JSX.Element => {
  const renderBtnStyle = (color: string, border?: number) => {
    return {
      width: 80,
      height: 70,
      backgroundColor: `${color ? color : "#fff"}`,
      alignContent: "center",
      justifyContent: "center",
    };
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        // backgroundColor: "green",
        justifyContent: "flex-end",
        position: "absolute",
        width: 375,
        height: 100,
        right: 0,
        maxHeight: 130,
        zIndex: -1,
        borderRadius: 8,
      }}
    >
      <TouchableOpacity
        style={renderBtnStyle("#525252", 0.5)}
        onPress={() => onCategoryEdit(id)}
      >
        <AntDesign
          name="swap"
          size={30}
          color="#fff"
          style={{ alignSelf: "center" }}
        />
        <Text
          style={{
            fontSize: 13,
            color: "#fff",
            fontFamily: "NMedium",
            alignSelf: "center",
            lineHeight: 18,
          }}
        >
          카테고리
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={renderBtnStyle("#525252")}
        onPress={() => onTagEdit(data)}
      >
        <Fontisto
          name="hashtag"
          size={20}
          color="#fff"
          style={{ alignSelf: "center", marginBottom: 6, marginTop: 4 }}
        />
        <Text
          style={{
            fontSize: 13,
            lineHeight: 18,
            color: "#fff",
            fontFamily: "NMedium",
            alignSelf: "center",
            lineHeight: 18,
          }}
        >
          태그
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={renderBtnStyle("#ff6c6c")}
        onPress={() => onDeleteLink(data)}
      >
        <AntDesign
          name="delete"
          size={26}
          color="#fff"
          style={{ alignSelf: "center" }}
        />
        <Text
          style={{
            fontSize: 13,
            color: "#fff",
            fontFamily: "NMedium",
            alignSelf: "center",
            lineHeight: 18,
          }}
        >
          삭제
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkInMenu;
