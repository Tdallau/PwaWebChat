import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthDialogComponent } from '../auth-dialog.component';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMessage: string;
  successMessage: string;

  constructor(
    private fb: FormBuilder, public dialog: AuthDialogComponent, private authService: AuthService) {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
    });
  }

  LoadRegister() {
    this.dialog.login = false;
  }

  tryLogin(value) {
    this.authService.doLogin(value).subscribe(res => {
      this.errorMessage = '';
      this.dialog.onNoClick();
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
      this.successMessage = '';
    });
  }

  ngOnInit() {
  }

}
