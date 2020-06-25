import Axios from "axios";
import url from "./url";
const deleteLinkApi = async (url_id: number): Promise<any> => {
  return await Axios.delete(`${url}/links/${url_id}`);
};

export default deleteLinkApi;
