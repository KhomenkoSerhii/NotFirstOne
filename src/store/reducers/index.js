import { combineReducers } from "redux";
import getUsersReducer from './getUsersReducer'
import getPostsReducer from './getPostsReducer'
import getCommentsReducer from './getCommentsReducer'
import AuthReducer from './AuthReducer'
import isLogin from './isLogin'

export default combineReducers({
    getUsersReducer,
    getPostsReducer,
    getCommentsReducer,
    AuthReducer,
    isLogin
})