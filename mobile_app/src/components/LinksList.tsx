import React from "react";
import { FlatList, Platform } from "react-native";
import Link from "../components/Link";
import { Url } from "../models/UrlStateTypes";
type Props = {
  list: Url[];
  onModal: (linkData: Url, modalType: string) => void;
};

const LinkList = ({ list, onModal }: Props): JSX.Element => {
  return (
    <FlatList
      data={list}
      renderItem={({ item }) => <Link data={item} onModal={onModal} />}
      keyExtractor={(item) => item.id.toString()}
      style={{
        marginLeft: 0,
        marginBottom: "5%",
        marginTop: "10%",
      }}
      showsVerticalScrollIndicator={Platform.OS === "ios" ? false : true}
      contentContainerStyle={{ paddingBottom: 40 }}
    />
  );
};

export default LinkList;
