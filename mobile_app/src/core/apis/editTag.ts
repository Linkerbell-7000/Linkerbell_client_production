import Axios from "axios";
import url from "./url";

type ProfileProps = {
  id: number;
  tags: string[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const editTagRequest = async (editData: ProfileProps): Promise<any> => {
  const { id, tags } = editData;
  const data = {
    url_id: id,
    tag_list: tags,
  };
  return await Axios.patch(`${url}/links/tags`, data);
};

export default editTagRequest;
