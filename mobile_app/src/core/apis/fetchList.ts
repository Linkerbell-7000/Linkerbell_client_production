import Axios from "axios";
import url from "./url";
const fetchListApiRequest = async (category_id: number): Promise<any> => {
  return await Axios.get(`${url}/links/category_list/${category_id}`);
};

export default fetchListApiRequest;
