import { SIGN_IN, SIGN_OUT } from "../constants";


const emptyStore = {
    username: '',
    password: ''
}

const initStore = {
    ...emptyStore
};

export default function reducer(store = initStore, { type, payload }) {
    switch (type) {
        case SIGN_IN: {
            return {
                ...store,
                ...payload
            };
        }

        case SIGN_OUT: {
            return emptyStore
        }

        default:
            return store;
    }
}