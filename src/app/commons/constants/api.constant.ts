import { urlEncode } from "../utils/http.util";
import { API_URL } from "./config.constant";

export const API_USER = urlEncode([API_URL, 'users'])
export const API_LOGIN = urlEncode([API_USER, 'login'])

