import { urlEncode } from 'src/app/commons/utils/http.util';
import { API_URL } from './config.constant';


export const API_LOGIN = urlEncode([API_URL, 'login']);