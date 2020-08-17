/* eslint-disable @typescript-eslint/no-explicit-any */
export type LoginValue = {
  email: string;
  password: string;
  passwordCheck?: string;
  err?: any;
  [key: string]: any;
};
