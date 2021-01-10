import { GET_USERS } from "../constants";

const initStore = {
    users: []
}

export default function reducer(store = initStore, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...store,
                users: action.users
            }
        default:
            return store
    }
}