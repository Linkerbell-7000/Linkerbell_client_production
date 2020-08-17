import Axios from "axios";
import url from "./url";
const fetchAllListApiRequest = async (): Promise<any> => {
  return await Axios.get(`${url}/links`);
};

export default fetchAllListApiRequest;
