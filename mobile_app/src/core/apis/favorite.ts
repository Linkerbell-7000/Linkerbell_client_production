import Axios from "axios";
import url from "./url";
const sendFavoriteRequest = async (
  url_id: number,
  favorite: boolean,
): Promise<any> => {
  const currentFavorite = favorite ? 0 : 1;
  const data = {
    url_id,
    favorite: currentFavorite,
  };
  return await Axios.patch(`${url}/links/favorite`, data);
};

export default sendFavoriteRequest;
