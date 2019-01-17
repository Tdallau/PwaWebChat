import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthDialogComponent } from '../auth-dialog.component';
import { AuthService } from 'src/app/_services/auth/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;
  successMessage: string;

  constructor(private fb: FormBuilder, public dialog: AuthDialogComponent,
              private authService: AuthService) {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      username: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      repeatPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
    }, {validators: this.checkPasswords});
  }

  ngOnInit() {
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.repeatPassword.value;

    return pass === confirmPass ? null : { notSame: true };
  }

  loadLogin() {
    this.dialog.login = true;
  }

  tryRegister(value) {
    this.authService.doRegister(value)
    .subscribe(res => {
      this.errorMessage = '';
      this.successMessage = 'Your account has been created';
      this.authService.saveNewUser(value, res.user.uid);
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = '';
    });
  }

}
