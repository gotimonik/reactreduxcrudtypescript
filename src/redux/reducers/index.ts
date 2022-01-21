import { combineReducers } from "redux";
import PostReducer from "./PostReducer";

const Reducers = combineReducers({
  post: PostReducer,
});

export type State = ReturnType<typeof Reducers>;
export default Reducers;
