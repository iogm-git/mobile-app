import axios from "axios";
import { APP_BASE_URL } from '@env'

const BaseApi = axios.create({
    baseURL: APP_BASE_URL,
    withCredentials: true
})

export default BaseApi