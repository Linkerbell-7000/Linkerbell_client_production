import * as Facebook from "expo-facebook";
import Axios from "axios";
import { facebookKey } from "../../../config";
const signInWithFacebookAsync = async (): Promise<any> => {
  try {
    await Facebook.initializeAsync(facebookKey.key);
    const { type, token }: any = await Facebook.logInWithReadPermissionsAsync({
      permissions: ["public_profile"],
    });
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      // console.log(token);
      const response = await Axios.get(
        `https://graph.facebook.com/me?access_token=${token}`,
      );
      const { id } = response.data;
      return id;
    } else {
      return "login cancel";
    }
  } catch ({ message }) {
    return "login cancel";
  }
};

export default signInWithFacebookAsync;
