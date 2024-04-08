import { Injectable } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, AbstractControl, FormArray, FormGroup, FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { objectToFormData } from '../utils/helper.util';

interface DisplayErrorOptions {
  label?: string
  label2?: string // use for matching a password that has a 2nd label
  keyValue?: string
  isArray?: true
}

class FormError {
  #error: string;
  #status: string;

  constructor() {
    this.#error = "";
    this.#status = "";
  }

  get error() {
    return this.#error;
  }

  set error(err: string) {
    this.#error = err;
  }

  get httpstat() {
    return this.#status;
  }

  set httpstat(http: string) {
    this.#status = http;
  }

}

export class Form extends FormError {
  #form: UntypedFormGroup;
  nonFieldErrors!: string;
  subs = {} as any;

  constructor(
    fields: Object = {}
  ) {
    super()
    this.#form = new UntypedFormBuilder().group(fields);
  }

  get form() {
    return this.#form;
  }

  get isValid(): boolean {
    return this.#form.valid;
  }

  get(f: string) {
    return this.#form.get(f);
  }

  valid(f: string) {
    return !(!this.#form.get(f)?.valid && this.#form.get(f)?.touched);
  }

  hasError(f: string, e: string) {
    return this.#form.get(f)?.touched && this.#form.get(f)?.hasError(e);
  }

  getErrorMsg(f: string, e="error") {
    return (this.#form.get(f) as any).errors['error'];
  }

  displayError(key?: AbstractControl | string | null, options?:DisplayErrorOptions){
    if (!key) return;
    
    let { label= 'This', keyValue="", label2="", isArray } = {...options}

    const formControl = typeof key === 'string' ? this.#form.get(key) : key;
    
    const keys = Object.keys(formControl?.errors || {})

    if (!formControl?.touched || keys.length === 0) return "";

    if (keys[0] === "email") {
      label = 'Email'
    }

   
    
    if (["minlength", "maxlength",'min','max'].includes(keys[0])) {
      const error = formControl?.errors?.[keys[0]]
      keyValue = keyValue || error.requiredLength  || error.min
    } else {
      keyValue = keyValue || formControl?.errors?.[keys[0]]?.keyValue 
    }

    label2 = label2 || keyValue 
    
    //@ts-ignore
    const serverErrors = formControl?.errors?.error

    const errMsg: {[key: string]: any} = {
      "minlength": isArray ? 'Minimum of %keyValue% items' : "Minimum of %keyValue% characters",
      "maxlength": isArray ? 'Maximum of %keyValue% items' : "Maximum of %keyValue% characters",
      "maxword": "Maximum of %keyValue% words",
      "minword": "Minium of %keyValue% words",
      "required": "%label% is required",
      "email": "%label% is not valid",
      "time": "%label% is not valid",
      "match": "%label% must be match to %keyValue%",
      "field_null": "The %keyValue% must not empty",
      "alpha_num": "%label% must contain numbers and letters only",
      "common": "%label% is too common",
      "error": (serverErrors && serverErrors[0]) || "%label% is invalid",
      "card": "%label% is not valid",

      // Add More error messages if it does not exist

    }[keys[0]] || 'errors.invalid' // Get the first error message... 

    return errMsg['replace']("%label%",label).replace("%keyValue%",keyValue).replace('%label2%',label2)
  }
  /* SET BACKEND ERRORS
   * use this to set errors that came from the backend
   */
  setFormErrors(errors:any): void {
    const _setObjError= (errs: any, parent?: FormGroup)=>{
      // Handle nested error message like object on arrays
      for (let [key, value] of Object.entries(errs)) {
        const control: any = (parent || this.#form).get(key);
        if (control instanceof FormArray) {
          // @ts-ignore
          if (typeof value[0] === 'string' ) {
            if(control) control.setErrors({'error': value});
          }else {
            // @ts-ignore
            value.forEach((v, index)=>{
              // @ts-ignore
              _setObjError(v, control.at(index))
            })
          }
          return
        }

        if(control) control.setErrors({'error': value});
      }
    }
    
    _setObjError(errors)

    if('non_field_errors' in errors) {
      this.nonFieldErrors = (errors['non_field_errors'] as []).toString();
    }
  }

  /* AUTO VALIDATE
   * force the field to trigger validation
   */
  validate(key: string): void {
    const f = (this.#form.get(key) as any);
    f.markAsTouched(); f.markAsDirty(); f.updateValueAndValidity();
  }

  /* SUBSCRIBE TO FIELD CHANGES
   * specify which fields to subscribe it's value
   */
  onSubscribe(...fields: string[]): void {
    for(let f of fields) {

      this.#form.get(f)?.valueChanges.pipe().subscribe(val => {
        this.subs[f] = val; 
      })

    }
  }

  get formData(): FormData {
    return objectToFormData(this.form.value)
  }


  fileChange(event: any,name: string | AbstractControl) {
    const file = event.target.files[0]
    if (typeof name === "string") {
      return this.#form.get(name)?.setValue(file)
    }
    return name.setValue(file)
  }

  idExists(id: number, field: FormControl){
    return field.value.includes(id);
  }

  toggleId(id: number, field: FormControl){
    if(this.idExists(id ,field)){
      field.setValue(field.value.filter((type: number)=> type != id));
    }else{
      field.setValue([...field.value, id]);
    }
  }

  toggleRadioId(id: number, field: FormControl){
    if (field.value == id) {
      field.setValue(null);
    }else{
      field.setValue(id);
    }
  }

  patchArrayIds(ids: any[], field: FormControl){
    field.setValue(ids.map(({id})=> id));
  }
}