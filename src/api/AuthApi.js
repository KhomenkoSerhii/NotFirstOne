import { SIGN_IN, SIGN_OUT } from "../store/constants";


export const signIn = async (username, password) => {
    const res = await fetch('/', {
        method: 'POST',
        body: JSON.stringify({
            username: username.value,
            password: password.value,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return res.json();
    // dispatch({ type: SIGN_IN, payload: res });
}

export const signOut = () => {
    return async dispatch => {
        try {
            dispatch({ type: SIGN_OUT });
        } catch (err) {
            return err;
        }
    };
}