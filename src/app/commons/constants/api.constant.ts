import { urlEncode } from "../utils/http.util";
import { API_URL } from "./config.constant";

export const API_USER = urlEncode([API_URL, 'users'])
export const API_WORKSPACE = urlEncode([API_URL, 'workspace', 'current'])
export const API_TICKET = urlEncode([API_URL, 'tickets', 'current'])

// Login API
export const API_LOGIN = urlEncode([API_USER, 'login'])
// Creating account API
export const API_CREATE = urlEncode([API_USER, 'register'])
// Fetching workspace base on user ID
export const API_WORKSPACE_ID = urlEncode([API_WORKSPACE, 'workspace'])
// Fetching stage base on user ID
export const API_STAGE_ID = urlEncode([API_WORKSPACE, 'stage'])
// Fetching current user logged in
export const API_USER_LOGGED = urlEncode([API_USER, 'currentUser'])

