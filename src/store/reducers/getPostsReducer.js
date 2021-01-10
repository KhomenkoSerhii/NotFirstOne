import { ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS } from "../constants";

const initStore = {
    posts: []
}

export default function reducer(store = initStore, action) {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...store,
                posts: action.posts
            }
        case ADD_POST:
            return {
                ...store,
                posts: [action.post, ...store.posts],
            };
        case EDIT_POST:
            return {
                ...store,
                posts: [...store.posts.map(
                    (post) => {
                        if (post.id === action.id) {
                            return {
                                ...post,
                                body: action.body,
                            };
                        }
                        return post;
                    },
                )],
            };
        case DELETE_POST:
            return {
                ...store,
                posts: [...store.posts.filter(post => post.id !== action.id)]
            };
        default:
            return store
    }
}