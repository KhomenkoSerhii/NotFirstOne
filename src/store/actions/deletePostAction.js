import { DELETE_POST } from "../constants";

export const deletePost = id => ({
    type: DELETE_POST,
    id,
});