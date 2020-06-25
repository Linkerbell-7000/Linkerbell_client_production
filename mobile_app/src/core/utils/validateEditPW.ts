import React from "react";
import { EditPWType } from "../../models/MyPageTypes";

type err = {
  password: string | null;
  newPassword: string | null;
  newPasswordCheck: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export const validatePassword = (
  value: EditPWType,
  setAciton: React.Dispatch<React.SetStateAction<EditPWType>>,
): void => {
  const err: err = { ...value.err };
  for (const key in value) {
    if (key !== "err") {
      if (value[key].length < 8) {
        err[key] = `empty ${key}`;
      } else {
        delete err[key];
      }
    }
  }
  setAciton({ ...value, err });
};
