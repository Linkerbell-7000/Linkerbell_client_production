/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const GET_COPY_TO_CLIPBOARD = "GET_COPY_TO_CLIPBOARD" as const;

export const getClipboard = (copiedUrl: string) => ({
  type: GET_COPY_TO_CLIPBOARD,
  payload: { copiedUrl },
});
export type InitialServicesState = {
  copiedUrl: string;
};

const initialState: InitialServicesState = {
  copiedUrl: "",
};

export type ServicesActions = ReturnType<typeof getClipboard>;

const reducer = (state = initialState, action: ServicesActions) => {
  switch (action.type) {
    case GET_COPY_TO_CLIPBOARD: {
      const { copiedUrl } = action.payload;
      return { ...state, copiedUrl };
    }
    default:
      return state;
  }
};

export default reducer;
