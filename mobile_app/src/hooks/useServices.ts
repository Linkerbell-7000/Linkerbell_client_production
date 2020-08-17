/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/module/index";
import { getClipboard } from "../store/module/services";

export default function useServices() {
  const copiedUrl = useSelector((state: RootState) => state.services.copiedUrl);
  const dispatch = useDispatch();
  const getCopiedUrl = useCallback(
    (coipedUrl) => {
      dispatch(getClipboard(coipedUrl));
    },
    [dispatch],
  );

  return {
    copiedUrl,
    getCopiedUrl,
  };
}
