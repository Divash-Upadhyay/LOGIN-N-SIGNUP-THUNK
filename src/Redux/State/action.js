import * as types from "./actionTypes";

export const fetchStateRequest = (payload) => {
  return {
    type: types.FETCH_STATE_REQUEST,
    payload,
  };
};

export const fetchStateSuccess = (payload) => {
  return {
    type: types.FETCH_STATE_SUCCESS,
    payload,
  };
};

export const fetchStateFailure = (payload) => {
  return {
    type: types.FETCH_STATE_FAILURE,
    payload,
  };
};
