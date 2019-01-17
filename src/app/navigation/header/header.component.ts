import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthDialogComponent } from 'src/app/auth-dialog/auth-dialog.component';
import { AuthService } from 'src/app/_services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: any | undefined = undefined;

  constructor(public dialog: MatDialog, public authService: AuthService) {
  }

  ngOnInit() {
    this.authService.user.subscribe(res => {
      if (res) {
        const unsubscribe = this.authService.getUser(res.uid).onSnapshot(actions => {
          if (res) {
            unsubscribe();
          }
          this.user =  actions.data();
        });
      } else {
        this.user = undefined;
      }
    });
  }

  openLogin(): void {
    const dialogRef = this.dialog.open(AuthDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

}
