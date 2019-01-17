import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {

  public login: boolean;

  constructor(public dialogRef: MatDialogRef<AuthDialogComponent>) { }

  ngOnInit() {
    this.login = true;
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
