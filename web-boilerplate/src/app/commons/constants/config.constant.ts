import { environment } from "src/environments/environment";

// Keys for jwt tokens in localStorage
export const AUTH_KEY = 'm84atC90dF7o8MmV';

/* HOST
 */
export const HOST = `${(window as any).location?.host}`;
export const STREAM_PROTOCOL = (window as Window).location.protocol === 'https:' ? 'wss://': 'ws://';


/* API URL
 */
export const API_URL = `${environment.apiURL}/api`;


/* CHANNEL
 */
export const STREAM_URL = '/stream/';
export const API_STREAM = `${STREAM_PROTOCOL}${API_URL}${STREAM_URL}`;

export const DATE_FORMAT = 'YYYY-MM-DD';