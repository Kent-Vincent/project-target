import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as moment from 'dayjs';


// Tasker
export const MINIMUM_AGE = 18

export const matcher = (match="new_password") => {
  return (control: any): ValidationErrors | null => {

    if (control.parent) {
      const new_password = control.parent.controls[match].value;

      if (
        new_password &&
        new_password !== control.value
      ) {
        return { match: {keyValue: match }};
      }

      return null;
    }
    return null;
  }
}

export const fieldNull = (target = "current_password") => {
  return (control: any ): ValidationErrors | null => {
    if (control.parent) {
      const targetValue = control.parent?.controls[target]?.value;
      // current password value should not be null
      // when the new_password field has value.
      if (control.value) {
        return targetValue ? null: { field_null: {keyValue: target}};
      }
    }
    return null;
  }
}

// https://gist.github.com/brianroadifer/b4798a71dd6af15f6b11b7f6b36ece19
export class WordValidator {
  private static seperator = /\s+/gmu;

  static min(min: number, seperator: string | RegExp = WordValidator.seperator): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Check that the control has a value and if that value is a string.
      if (control.value && typeof control.value === 'string') {
        // Remove any leading and trailing whitespace
        const value = control.value.trim();
        const words = value.split(seperator);
        const actual = words.length;
        if (actual < min) {
          return { minword: { keyValue: min, actual } };
        }
      }
      return null;
    };
  }

  static max(max: number, seperator: string | RegExp = WordValidator.seperator): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Check that the control has a value and if that value is a string.
      if (control.value && typeof control.value === 'string') {
        // Remove any leading and trailing whitespace.
        const value = control.value.trim();
        const words = value.split(seperator);
        const actual = words.length;
        if (actual > max) {
          return { maxword: { keyValue: max, actual } };
        }
      }
      return null;
    };
  }
}


export class DateValidator {
  static maxAge(max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Check that the control has a value and if that value is a string.
      if (control.value && typeof control.value === 'string') {
        // Remove any leading and trailing whitespace.
        const yearsGap = moment().diff(moment(control.value),'years')
        if (yearsGap > max) {
          return { maxAge: { keyValue: max, actual: control.value } };
        }
      }
      return null;
    };
  }
  static minAge(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Check that the control has a value and if that value is a string.
      if (control.value && typeof control.value === 'string') {
        // Remove any leading and trailing whitespace.
        const yearsGap = moment().diff(moment(control.value),'years')
        if (yearsGap < min) {
          return { minAge: { keyValue: min, actual: control.value } };
        }
      }
      return null;
    };
  }
  static date(format='YYYY-MM-DD'): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Check that the control has a value and if that value is a string.
      if (control.value && typeof control.value === 'string') {
        // Remove any leading and trailing whitespace.
        const date = moment(control.value,format)
        if (!date.isValid()) {
          return { date: { keyValue: format, actual: control.value } };
        }
      }
      return null;
    };
  }
  static time(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      // Check that the control has a value and if that value is a string.
      if (control.value && typeof control.value === 'string') {
        // Remove any leading and trailing whitespace.
        const isValid = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(control.value)
        if (!isValid) {
          return { time: { actual: control.value } };
        }
      }
      return null;
    };
  }
}