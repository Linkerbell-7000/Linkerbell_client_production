import React from "react";
import { LoginValue } from "../../models/LoginTypes";

type err = {
  email: string | null;
  password: string | null;
  passwordCheck: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export const validateValue = (
  value: LoginValue,
  setAciton: React.Dispatch<React.SetStateAction<LoginValue>>,
): void => {
  const err: err = { ...value.err };
  for (const key in value) {
    if (key !== "err") {
      if (value[key].length < 8 && err[key] !== "wrong email") {
        err[key] = `empty ${key}`;
      } else if (
        err.email !== "wrong email" &&
        err.email !== "request wrong email signup"
      ) {
        delete err[key];
      }
    }
  }
  setAciton({ ...value, err });
};
