import Axios from "axios";
import url from "./url";
import WithFacebook from "./WithFacebookLogin";
import WithGoogle from "./WithGoogleLogin";

export const loginWithGoogleApiRequest = async (): Promise<any> => {
  try {
    const res = await WithGoogle();
    if (res !== "login cancel") {
      return await Axios.post(`${url}/users/oauth`, { it: res });
    }
  } catch (e) {
    console.log(e);
  }
};

export const loginWithFacebookApiRequest = async (): Promise<any> => {
  try {
    const res = await WithFacebook();
    if (res !== "login cancel") {
      return await Axios.post(`${url}/users/oauth_1`, { email: res });
    }
  } catch (e) {
    console.log(e);
  }
};
