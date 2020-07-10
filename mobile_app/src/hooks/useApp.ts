/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/module/index";
import {
  handleLoadDataPending,
  handleLoadDataSuccess,
  handleDarkmode,
} from "../store/module/app";

export default function useServices() {
  const isDataLoading = useSelector(
    (state: RootState) => state.app.isDataLoading,
  );
  const isDarkmode = useSelector((state: RootState) => state.app.isDarkmode);
  const dispatch = useDispatch();

  const onLoadDataPending = useCallback(() => {
    dispatch(handleLoadDataPending());
  }, [dispatch]);
  const onLoadDataSuccess = useCallback(() => {
    dispatch(handleLoadDataSuccess());
  }, [dispatch]);
  const onDarkmode = useCallback(() => {
    dispatch(handleDarkmode());
  }, [dispatch]);
  return {
    isDataLoading,
    onLoadDataPending,
    onLoadDataSuccess,
    isDarkmode,
    onDarkmode,
  };
}
