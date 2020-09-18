import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

//async action with redux thunk, second argument in the dispatch can call our state object
//so we get the userId from that state
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post("/streams ", { ...formValues, userId });

  //making use of the created stream
  dispatch({ type: CREATE_STREAM, payload: response.data });
};

// fetching all of the available stream
export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/streams");

  //making use of the created stream
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

//fetching a single stream
export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  //making use of the created stream
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, formValues);

  //making use of the created stream
  dispatch({ type: EDIT_STREAM, payload: response.data });
};

// delete a stream
export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  //making use of the created stream
  dispatch({ type: DELETE_STREAM, payload: id });
};
