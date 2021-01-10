import { IS_LOGIN } from "../constants";

export const isLogin = login => ({
    type: IS_LOGIN,
    login
})