import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<firebase.User>;

  constructor(public afAuth: AngularFireAuth, private db: AngularFirestore) {
    this.user = afAuth.authState;
    this.user.subscribe(auth => {
      localStorage.setItem('loggedIn', JSON.stringify(auth));
    })
  }

  public doRegister(value) {
    const promise = this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password);
    return Observable.fromPromise(promise);
  }

  public doLogin(value) {
    const promise = this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password);
    return Observable.fromPromise(promise);
  }

  public logout() {
    localStorage.removeItem('loggedIn');
    return this.afAuth.auth.signOut();
  }

  public saveNewUser(value, uid): void {
    this.db.collection('users').doc(uid).set({
      name: value.username
    });
  }
  public getUser(uid) {
    return this.db.collection('users').doc(uid).ref;
  }
}
