import Axios from "axios";
import url from "./url";

type ProfileProps = {
  user_id: number;
  age?: React.ReactText;
  gender?: React.ReactText;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProfileRequest = async (data: ProfileProps): Promise<any> => {
  const opt = {
    headers: {
      withCredentials: true,
      "Content-Type": "application/json",
    },
  };
  return await Axios.patch(`${url}/users/profile`, data, opt);
};

export default ProfileRequest;
