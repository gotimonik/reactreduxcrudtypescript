import * as types from "../constants/index";
import axios from "axios";
import { Dispatch } from "redux";

import { Props } from "../../models/redux";
const getPosts = (posts: Props) => ({
  type: types.GET_POSTS,
  payload: posts,
});

export const loadPosts = () => {
  return async function (dispatch: Dispatch) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch(getPosts(response.data));
  };
};
