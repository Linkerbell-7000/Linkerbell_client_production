import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/module/index";
import {
  callLoginAPi,
  profileUpdate,
  oauthLoginSuccess,
  signup,
  logout,
  initailizeError,
} from "../store/module/auth";
import { useCallback } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useAuth() {
  const user_id = useSelector((state: RootState) => state.auth.user_id);
  const email = useSelector((state: RootState) => state.auth.email);
  const age = useSelector((state: RootState) => state.auth.age);
  const gender = useSelector((state: RootState) => state.auth.gender);
  const err = useSelector((state: RootState) => state.auth.err);
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  const isOauthLogin = useSelector((state: RootState) => state.auth.isOauth);
  const dispatch = useDispatch();

  const onLogin = useCallback(
    (loginValue) => {
      dispatch(callLoginAPi(loginValue));
    },
    [dispatch],
  );
  const onOauthLogin = useCallback(
    (userInfo) => {
      dispatch(oauthLoginSuccess(userInfo));
    },
    [dispatch],
  );
  const onSignup = useCallback(
    (signupValue) => {
      dispatch(signup(signupValue));
    },
    [dispatch],
  );
  const updateProfile = useCallback(() => {
    dispatch(profileUpdate());
  }, [dispatch]);

  const onLogOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  const handleErr = useCallback(() => {
    dispatch(initailizeError());
  }, [dispatch]);

  return {
    user_id,
    age,
    gender,
    email,
    err,
    onLogin,
    updateProfile,
    onOauthLogin,
    onSignup,
    isLogin,
    onLogOut,
    handleErr,
    isOauthLogin,
  };
}
