/* Check if object is empty.
 */
export const objIsEmpty = (obj: Object) => {
  return Object.keys(obj).length === 0;
}

export const objectToFormData = (data: any)=> {
  const toFormData = ((f) => f(f))(
    (h: any) => (f: any) => f((x: any) => h(h)(f)(x))
  )((f: any) => (fd = new FormData()) => (pk: any) => (d: any) => {
    if (d instanceof Object) {                                      
      Object.keys(d).forEach((k) => {
        const v = d[k];
        if (pk) k = `${pk}[${k}]`;
        if (v instanceof Object && !(v instanceof Date) && !(v instanceof File)) {
          return f(fd)(k)(v);
        } else {
          fd.append(k, v ?? "");
        }
      });
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    return fd;
  })()();

  return toFormData(data)
}
