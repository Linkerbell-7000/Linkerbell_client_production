import React from "react";
import { FindPWType } from "../../screens/verifyEmail";

type err = {
  email: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export const validateEmail = (
  value: FindPWType,
  setAciton: React.Dispatch<React.SetStateAction<FindPWType>>,
): void => {
  const err: err = { ...value.err };
  for (const key in value) {
    if (key !== "err") {
      if (
        value.email.length < 8 &&
        err[key] !== "wrong email" &&
        err[key] !== "check email"
      ) {
        err[key] = `empty ${key}`;
      } else if (err[key] === `empty ${key}`) {
        delete err[key];
      }
    }
  }
  setAciton({ ...value, err });
};
