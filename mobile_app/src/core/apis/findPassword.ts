import Axios from "axios";
import url from "./url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const findPassword = async (email: string): Promise<any> => {
  const data = {
    email,
  };
  return await Axios.patch(`${url}/users/help`, data);
};

export default findPassword;
