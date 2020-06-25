/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const LOAD_DATA_PENDING = "LOAD_DATA_PENDING" as const;
export const LOAD_DATA_SUCCESS = "LOAD_DATA_SUCCESS" as const;

export const handleLoadDataPending = () => ({
  type: LOAD_DATA_PENDING,
});
export const handleLoadDataSuccess = () => ({
  type: LOAD_DATA_SUCCESS,
});
export type InitialAppState = {
  isDataLoading: boolean;
};

const initialState: InitialAppState = {
  isDataLoading: false,
};

export type AppActions =
  | ReturnType<typeof handleLoadDataPending>
  | ReturnType<typeof handleLoadDataSuccess>;

const reducer = (state = initialState, action: AppActions) => {
  switch (action.type) {
    case LOAD_DATA_PENDING: {
      return { isDataLoading: true };
    }
    case LOAD_DATA_SUCCESS: {
      return { isDataLoading: false };
    }
    default:
      return state;
  }
};

export default reducer;
