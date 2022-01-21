import * as types from "../constants/index";
import { Props } from "../../models/redux";
const initialState = {
  posts: [],
  post: {},
  loading: true,
};
const PostReducer = (state = initialState, action: Props) => {
  switch (action.type) {
    case types.GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default PostReducer;
