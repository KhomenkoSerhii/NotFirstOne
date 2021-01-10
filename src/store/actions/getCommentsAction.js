import { GET_COMMENTS } from "../constants";

export const getComments = comments => ({
    type: GET_COMMENTS,
    comments
})