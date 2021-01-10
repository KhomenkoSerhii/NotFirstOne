import { MAIN_URL } from "../store/constants"

export const getPostsApi = async (postsId) => {
    const res = await fetch(`${MAIN_URL}/posts?userId=${postsId}`)
    return res.json();
}

const changePostsUrl = (id) => {
    return `${MAIN_URL}/posts/${id}`
}

export const deletePostAction = async (id) => {
    const res = await fetch(changePostsUrl(id), {
        method: 'DELETE',
    })
    return res.json();
}

export const putPostAction = async (id, body) => {
    const res = await fetch(changePostsUrl(id), {
        method: 'PUT',
        body: JSON.stringify({
            body,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    return res.json();
};

export const addNewPost = async (userId, title, body) => {
    const res = await fetch(`${MAIN_URL}/posts`, {
        method: 'POST',
        body: JSON.stringify({
            userId,
            title,
            body,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    return res.json();
};