import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { config } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public id: string;

  constructor(public router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.id = localStorage.getItem('chat');
    if (this.id === null) {
      setTimeout(() => this.snackBar.open('Er is iets verkeerd gegaan klik opniew op een chat', 'X', {duration: 5000}));
      this.router.navigate(['chats']);
    }
    console.log(JSON.parse(this.id));
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    localStorage.removeItem('chat');
  }

}
