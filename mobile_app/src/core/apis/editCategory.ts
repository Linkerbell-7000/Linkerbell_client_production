import Axios from "axios";
import url from "./url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const editCategoryApi = async (
  url_id: number,
  category_id: number,
): Promise<any> => {
  const data = {
    url_id,
    category_id,
  };
  return await Axios.patch(`${url}/links/categories`, data);
};

export default editCategoryApi;
