/* eslint-disable @typescript-eslint/no-explicit-any */
export type EditPWType = {
  password: string;
  newPassword: string;
  newPasswordCheck?: string;
  err?: any;
  [key: string]: any;
};
