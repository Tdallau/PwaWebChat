import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentSnapshot, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IUser } from 'src/app/_models/user';
import { IChat } from 'src/app/_models/chat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private db: AngularFirestore) {
  }
  public createNewChat(uid, friendUid): void {
    this.db.collection('users').doc(friendUid).get().subscribe(friendRaw => {
      const friend = friendRaw.data() as IUser;
      this.db.collection('chats').add({
        name: friend.name,
        image: friend.profilePic ? friend.profilePic : 'https://cdn.pixabay.com/photo/2016/02/17/16/32/person-1205346_960_720.png',
        lastMessage: null,
        lastMessageDate: null,
      }).then((res: any) => {
        this.db.collection('chats').doc(res.id).update({
          key: res.id
        });
        // console.log(res.id);
        this.db.collection('users').doc(uid).get().subscribe((response: firebase.firestore.DocumentSnapshot) => {
          const user = response.data() as IUser;
          if (!user.chats) { user.chats = [res.id]; } else { user.chats.push(res.id); }
          this.db.collection('users').doc(uid).update({
              chats: user.chats
            });
        });
      });
    });
  }

  public getChat(chatId) {
    return this.db.collection('chats').doc(chatId).ref;
  }

}
