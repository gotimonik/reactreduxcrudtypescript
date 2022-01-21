import * as types from "../constants/index";
import axios from "axios";
import { Dispatch } from "redux";

import { Props } from "../../models/redux";

const getPosts = (posts: Props) => ({
  type: types.GET_POSTS,
  payload: posts,
});

const postDeleted = () => ({
  type: types.DELETE_POST,
});
const postAdded = () => ({
  type: types.ADD_POST,
});
const getPost = (post: {}) => ({
  type: types.GET_SINGLE_PAGE,
  payload: post,
});

export const loadPosts = () => {
  return async function (dispatch: Dispatch) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    dispatch(getPosts(response.data));
  };
};

export const deletePost = (id: number) => {
  return async function (dispatch: Dispatch) {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch(postDeleted());
  };
};

export const addPost = (user: {}) => {
  return async function (dispatch: Dispatch) {
    await axios.post(`https://jsonplaceholder.typicode.com/posts/`, user);
    dispatch(postAdded());
  };
};

export const getSinglePost = (id: number) => {
  return async function (dispatch: Dispatch) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    dispatch(getPost(response.data));
  };
};
