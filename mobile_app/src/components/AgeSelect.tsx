import React from "react";
import { StyleSheet } from "react-native";
import { IndexPath, Layout, Select, SelectItem } from "@ui-kitten/components";
import { UserDetailValue } from "../screens/userDetail";

const data = ["나이를 입력하세요", "10대", "20대", "30대", "40대", "50대 이상"];

type AgeProps = {
  value: UserDetailValue;
  setValue: React.Dispatch<React.SetStateAction<UserDetailValue>>;
};

const AgeSelect = ({ value, setValue }: AgeProps): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = data[selectedIndex.row];

  const renderOption = (title: string) => (
    <SelectItem title={title} key={title} />
  );

  return (
    <Layout style={styles.container} level="1">
      <Select
        style={{ marginTop: 10, marginBottom: 10 }}
        placeholder={"나이를 입력하세요"}
        value={displayValue}
        selectedIndex={selectedIndex}
        onSelect={(index: any) => {
          setSelectedIndex(index);
          const { row } = index;
          setValue({ ...value, age: row });
        }}
      >
        {data.map(renderOption)}
      </Select>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "60%",
    minHeight: 40,
    marginLeft: 50,
    backgroundColor: "transparent",
  },
});

export default AgeSelect;
