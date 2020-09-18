import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

import _ from "lodash";

export default (state = {}, action) => {
  switch (action.type) {
    //using mapkeys from loadash
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    //single stream record using key interpolation
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    //create single stream record using key interpolation
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    //edit single stream record using key interpolation
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    // using lodash omit() function to delete, payload is the id so no need to
    //omit creates a new object, no point in using spread operator
    case DELETE_STREAM:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
