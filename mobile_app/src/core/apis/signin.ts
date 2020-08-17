import Axios from "axios";
import url from "./url";
type LoginProps = {
  email: string;
  password: string;
};
type Response = {
  user_id: number;
  age: number;
  gender: number;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SignInRequest = async (data: LoginProps): Promise<any> => {
  const opt = {
    headers: {
      withCredentials: true,
      "Content-Type": "application/json",
    },
  };
  return await Axios.post(`${url}/users/signin`, data, opt);
};

export default SignInRequest;
