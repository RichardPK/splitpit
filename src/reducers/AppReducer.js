import { SET_APP } from "../actions/ActionTypes";

const initialState = {
  loaded: false
};

export default function(state = { ...initialState }, action) {
  switch (action.type) {
    case SET_APP:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
