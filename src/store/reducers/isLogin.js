import { IS_LOGIN } from "../constants"

const initStore = {
    login: false
}

export default function reducer(store = initStore, action) {
    switch (action.type) {

        case IS_LOGIN:
            return {
                ...store,
                login: action.login
            }
        default:
            return store
    }
}
