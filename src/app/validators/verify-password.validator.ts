import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const verifyPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const passwordCtrl = control.get('password');
  const confirmPasswordCtrl = control.get('confirmPassword');
  return passwordCtrl!.value !== confirmPasswordCtrl!.value
    ? { verify: false }
    : null;
};
