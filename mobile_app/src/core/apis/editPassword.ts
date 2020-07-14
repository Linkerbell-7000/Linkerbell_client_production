import Axios from "axios";
import url from "./url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const editPasswordApi = async (
  password: string,
  newPassword: string,
  newPasswordCheck: string,
): Promise<any> => {
  const data = {
    password,
    newPassword,
    checkPassword: newPasswordCheck,
  };
  return await Axios.patch(`${url}/users/mypage`, data);
};

export default editPasswordApi;
