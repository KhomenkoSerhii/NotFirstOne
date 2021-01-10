import { EDIT_POST } from "../constants";

export const editPosts = (id, body) => ({
    type: EDIT_POST,
    id,
    body,
});