import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/*
export const forbiddenNameValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  // control.value;
  return control.value === 'bob' ? { forbidden: 'bob' } : null;
};

*/

/*
const validator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  // control.value;
  return control.value === 'bob' ? { forbidden: 'bob' } : null;
};

export const forbiddenNameValidator = (name: string) => {
  return validator;
};

*/

export const forbiddenNameValidator = (name: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    // control.value;
    return control.value === name ? { forbidden: name } : null;
  };
};
