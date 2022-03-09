import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

//*************************************************************************

export const strongPassword = (password: RegExp): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    // control.value;
    return password.test(control.value) ? null : { match: false };
  };
};
