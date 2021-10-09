import { combineReducers } from "redux";

const initialState = {
  count: 0,
};

const listReducers = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export const rootReducers = combineReducers({
  counter: listReducers,
});
