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

    case types.DELETE_POST:
    case types.ADD_POST:
      case types.UPDATE_POST:
      return {
        ...state,
        loading: false,
      };

    case types.GET_SINGLE_PAGE:
      return {
        ...state,
        post: action.payload,
      };

    default:
      return state;
  }
};

export default PostReducer;
