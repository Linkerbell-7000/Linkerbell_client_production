import { Clipboard } from "react-native";

export const _setContent = async (): Promise<string> => {
  await Clipboard.setString("");
};
