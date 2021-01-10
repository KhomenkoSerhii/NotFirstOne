import { GET_COMMENTS } from "../constants";

const initStore = {
    comments: []
}

export default function reducer(store = initStore, action) {
    switch (action.type) {
        case GET_COMMENTS:
            return {
                ...store,
                comments: action.comments
            }
        default:
            return store
    }
}