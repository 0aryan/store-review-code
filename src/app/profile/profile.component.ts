import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { checkURL } from '../validators/checkurl.validator';
import { forbiddenNameValidator } from '../validators/forbidden-name.validator';
import { strongPassword } from '../validators/strong-password.validator';
import { verifyPasswordValidator } from '../validators/verify-password.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  //name = new FormControl('ravi');
  /*
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl(''),
      country: new FormControl(''),
    }),
    mobile: new FormArray([new FormControl('')]),
  });
*/

  profileForm = this.fb.group(
    {
      name: this.fb.control(
        [''],
        [
          Validators.required,
          Validators.maxLength(20),
          forbiddenNameValidator('bob'),
        ]
      ),
      email: this.fb.control([''], [Validators.required, Validators.email]),
      age: this.fb.control([''], [Validators.required, Validators.min(18)]),
      url: this.fb.control(
        [''],
        checkURL(
          new RegExp(
            /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/
          )
        )
      ),
      password: this.fb.control(
        [''],
        [
          Validators.required,
          strongPassword(
            new RegExp(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/)
          ),
        ]
      ),
      confirmPassword: this.fb.control(['']),
      address: this.fb.group({
        street: this.fb.control(['']),
        city: this.fb.control(['']),
        zip: this.fb.control(['']),
        country: this.fb.control(['']),
      }),
      mobile: this.fb.array([this.fb.control([''])]),
    },
    { validators: verifyPasswordValidator }
  );

  get mobileControls(): FormArray {
    return this.profileForm.get('mobile') as FormArray;
  }

  get name(): FormControl {
    return this.profileForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.profileForm.get('email') as FormControl;
  }

  get age(): FormControl {
    return this.profileForm.get('age') as FormControl;
  }

  get password(): FormControl {
    return this.profileForm.get('password') as FormControl;
  }

  get url(): FormControl {
    return this.profileForm.get('url') as FormControl;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  /*
  updateName(): void {
    this.name.setValue('hello');
  }
  */

  onSubmit(): void {
    console.log(this.profileForm.value);
  }
  // setvalue reequires all the key value to change
  // use patch value to make a partial change

  updateProfile(): void {
    this.profileForm.patchValue({
      name: 'abcdef',
      address: {
        street: 'xxxxxxx',
      },
    });
  }

  addMobile(): void {
    this.mobileControls.push(this.fb.control(['']));
  }
}
