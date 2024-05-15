import { urlEncode } from "../utils/http.util";
import { API_URL } from "./config.constant";

export const API_USER = urlEncode([API_URL, 'users']);
export const API_WORKSPACE = urlEncode([API_URL, 'workspace', 'current']);
export const API_TICKET = urlEncode([API_URL, 'tickets', 'current']);


export const API_CREATE_WORKSPACE = urlEncode([API_URL, 'workspace', 'create']);

// Login API
export const API_LOGIN = urlEncode([API_USER, 'login']);
// Creating account API
export const API_CREATE = urlEncode([API_USER, 'register']);


// Fetching workspace base on user ID
export const API_WORKSPACE_ID = urlEncode([API_WORKSPACE, 'workspace']);
export const API_WORKSPACE_CREATE = urlEncode([API_CREATE_WORKSPACE, 'workspace'])
export const API_WORKSPACE_SPECIFIC_ID = urlEncode([API_URL, 'workspace']);


// Fetching stage base on user ID
export const API_STAGE_SPECIFIC_ID = urlEncode([API_WORKSPACE_SPECIFIC_ID, 'stages']);
export const API_CREATE_STAGE = urlEncode([API_WORKSPACE_SPECIFIC_ID, 'create', 'stage'])


// Fetching current user logged in
export const API_USER_LOGGED = urlEncode([API_USER, 'currentUser']);
