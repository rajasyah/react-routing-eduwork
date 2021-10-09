import { combineReducers } from "redux";

const listReducers = (state = 0, action) => {
  const { type } = action;
  switch (type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

export const rootReducers = combineReducers({
  counter: listReducers,
});
