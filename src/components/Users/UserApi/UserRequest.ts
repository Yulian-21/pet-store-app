import axios from "axios"
import { BASE_API_URL } from "../../../config";
import IUser from "../UserType/UserType"


const USER_API_URL = `${BASE_API_URL}/user`;


export const sendUser = async (user: IUser) => {
    await axios.post<IUser>(USER_API_URL, user
    ).then(response => response.data)
        .catch(err => { alert(err.message) })
}