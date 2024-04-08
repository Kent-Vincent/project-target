import { objIsEmpty } from "./helper.util";


/* transform an object data into URLencoded string
  */
export let encodeURL = (url: string, data: any): string => {
  if (objIsEmpty(data)) { return url }

  for (let key in data){
    data[key] ?? delete data[key]
  } 
  let params = new URLSearchParams(data);

  return `${url}?${params.toString()}`;
}


/* transform a list of strings into url path
 * separated by trailing slash
 */
export let urlEncode = (params: any[] = [], queries: any = {}): string => {
  params = params.map((param) => param.toString().replace(/\/$/, ''));
  return encodeURL(params.join('/') + '/', queries);
}