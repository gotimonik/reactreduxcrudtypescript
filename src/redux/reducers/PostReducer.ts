import * as types from "../constants/index";
import { PostStore, Props } from "../../models/redux";

const initialState: PostStore = {
  posts: [],
  post: undefined,
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
    case types.ADD_POST: {
      const id = state.posts.length + 1;
      return {
        ...state,
        posts: [{ ...action.payload, id, userId: 1 }, ...state.posts],
        loading: false,
      };
    }
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
