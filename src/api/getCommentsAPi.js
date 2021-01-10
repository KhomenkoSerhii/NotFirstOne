import { MAIN_URL } from "../store/constants"

export const getCommentsApi = async (postsId) => {
    const res = await fetch(`${MAIN_URL}/comments?postId=${postsId}`)
    return res.json();
}