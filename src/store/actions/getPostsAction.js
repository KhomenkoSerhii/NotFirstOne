import { GET_POSTS } from "../constants";

export const getPosts = posts => ({
    type: GET_POSTS,
    posts,
});