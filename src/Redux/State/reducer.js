import * as types from "./actionTypes";

const initState = {
  loading: false,
  state: {},
  error: false,
};

export const stateReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.FETCH_STATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case types.FETCH_STATE_SUCCESS:
      return {
        ...state,
        loading: false,
        state: payload,
        error: false,
      };

    case types.FETCH_STATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
