import Axios from "axios";
import url from "./url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const postUrl = async (link: string): Promise<any> => {
  const data = {
    url: link,
  };
  try {
    const res = await Axios.post(`${url}/links/`, data);
    return res.data.link_data;
  } catch (e) {
    console.log(e);
  }
};

export default postUrl;
