import { MAIN_URL } from "../store/constants"

export const getUsersList = async () => {
    const res = await fetch(`${MAIN_URL}/users`)
    return res.json()
}

