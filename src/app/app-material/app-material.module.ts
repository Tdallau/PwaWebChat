import { NgModule } from '@angular/core';

import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatSnackBarModule, MatDialogModule, MatFormFieldModule, MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule
  ]
})
export class AppMaterialModule { }
