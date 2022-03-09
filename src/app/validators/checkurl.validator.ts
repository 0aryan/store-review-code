import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const checkURL = (url: RegExp): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    // control.value;
    return url.test(control.value) ? null : { match: false };
  };
};
