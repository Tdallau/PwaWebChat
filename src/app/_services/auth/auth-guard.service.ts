import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    const loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    if (loggedIn !== null) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }

}
