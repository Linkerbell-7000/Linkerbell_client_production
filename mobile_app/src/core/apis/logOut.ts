import Axios from "axios";
import url from "./url";
const sendSignOutRequest = async (): Promise<any> => {
  return await Axios.post(`${url}/users/signout`);
};

export default sendSignOutRequest;
