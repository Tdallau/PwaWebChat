import { NgModule } from '@angular/core';

import {
  MatIconModule, MatButtonModule, MatSidenavModule, MatToolbarModule, MatSnackBarModule, MatDialogModule, MatFormFieldModule,
  MatInputModule, MatCardModule
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
    MatFormFieldModule,
    MatCardModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
  ]
})
export class AppMaterialModule { }
