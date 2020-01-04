import { SET_APP } from "./ActionTypes";

const Actions = {
  onAppLoad: (data) => async (dispatch) => {
    dispatch({
      type: SET_APP,
      payload: data
    });
  }
};

export default Actions;
