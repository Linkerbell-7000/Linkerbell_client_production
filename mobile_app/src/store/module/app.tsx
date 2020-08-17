/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const LOAD_DATA_PENDING = "LOAD_DATA_PENDING" as const;
export const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS" as const;
export const CHANGE_MODE = "CHANGE_MODE" as const;
export const handleLoadDataPending = () => ({
  type: LOAD_DATA_PENDING,
});
export const handleLoadDataSuccess = () => ({
  type: LOAD_DATA_SUCCESS,
});
export const handleDarkmode = () => ({
  type: CHANGE_MODE,
});
export type InitialAppState = {
  isDataLoading: boolean;
  isDarkmode: boolean;
};

const initialState: InitialAppState = {
  isDataLoading: false,
  isDarkmode: false,
};

export type AppActions =
  | ReturnType<typeof handleLoadDataPending>
  | ReturnType<typeof handleLoadDataSuccess>
  | ReturnType<typeof handleDarkmode>;

const reducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case LOAD_DATA_PENDING: {
      return { ...initialState, isDataLoading: true };
    }
    case LOAD_DATA_SUCCESS: {
      return { ...initialState, isDataLoading: false };
    }
    case CHANGE_MODE: {
      return { ...initialState, isDarkmode: !state.isDarkmode };
    }

    default:
      return state;
  }
};

export default reducer;
