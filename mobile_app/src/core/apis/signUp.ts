import axios from "axios";
import url from "./url";

type SignUpProps = {
  email: string;
  password: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SignUpRequest = async (data: SignUpProps): Promise<any> => {
  const opt = {
    headers: {
      withCredentials: true,
      "Content-Type": "application/json",
    },
  };
  return await axios.post(`${url}/users/signup`, data, opt);
};

export default SignUpRequest;
