import * as types from "../constants/index";
import axios from "axios";
import { Dispatch } from "redux";

import { AddPost, Props } from "../../models/redux";
import { API_URL } from "../../shared/constant";

const getPosts = (posts: Props) => ({
  type: types.GET_POSTS,
  payload: posts,
});

const postDeleted = () => ({
  type: types.DELETE_POST,
});
const postAdded = (post: AddPost) => ({
  type: types.ADD_POST,
  payload: post,
});

const postUpdated = () => ({
  type: types.UPDATE_POST,
});
const getPost = (post: {}) => ({
  type: types.GET_SINGLE_PAGE,
  payload: post,
});

export const getAllPosts = () => {
  return async function (dispatch: Dispatch) {
    const response = await axios.get(`${API_URL}/posts`);
    dispatch(getPosts(response.data));
  };
};

export const deletePost = (id: number) => {
  return async function (dispatch: Dispatch) {
    await axios.delete(`${API_URL}/posts/${id}`);
    dispatch(postDeleted());
  };
};

export const addPost = (post: AddPost) => {
  return async function (dispatch: Dispatch) {
    await axios.post(`${API_URL}/posts`, post);
    dispatch(postAdded(post));
  };
};

export const getPostById = (id: number) => {
  return async function (dispatch: Dispatch) {
    const response = await axios.get(`${API_URL}/posts/${id}`);
    dispatch(getPost(response.data));
  };
};

// For Updating Post

export const updatePost = (user: {}, id: number) => {
  return async function (dispatch: Dispatch) {
    await axios.put(`${API_URL}/posts/${id}`, user);
    dispatch(postUpdated());
  };
};
