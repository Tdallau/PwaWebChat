import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwaTest';

  constructor(updates: SwUpdate, public snackBar: MatSnackBar) {
    updates.available.subscribe(e => {
      const snack = snackBar.open('Updates Beschikbaar!', 'Ververs');
      snack
      .onAction()
      .subscribe(_ => {
        window.location.reload();
      });
    });
  }
}
