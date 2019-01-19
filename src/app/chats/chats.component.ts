import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IChat } from '../_models/chat';
import { ChatService } from '../_services/chat/chat.service';
import { IUser } from '../_models/user';
import { AuthService } from '../_services/auth/auth.service';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {

  search: boolean;
  searchText: string;
  chats: IChat[] | undefined = [];

  constructor(public router: Router, private chatService: ChatService, private authService: AuthService) {
    this.search = false;
  }

  ngOnInit() {
      this.updateChats();
  }

  updateChats() {
    const localUser: any = JSON.parse(localStorage.getItem('loggedIn'));
    this.authService.getUser(localUser.uid).onSnapshot(userRaw => {
      const user = userRaw.data() as IUser;
      if (user.chats) {
        user.chats.forEach(element => {
          if (!this.chats.find(e => e.key === element)) {
            this.chatService.getChat(element).onSnapshot(chatRaw => {
              const chat = chatRaw.data() as IChat;
              if (!this.chats.find(e => e.key === chat.key)) {
                this.chats.push(chat);
              } else {
                const oldChat = this.chats.find(e => e.key === chat.key);
                oldChat.lastMessage = chat.lastMessage;
                oldChat.lastMessageDate = chat.lastMessageDate;
                oldChat.name = chat.name;
                oldChat.image = chat.image;
              }
            });
          }
        });
      }
    });
  }



  goToChat(id: string) {
    localStorage.setItem('chat', JSON.stringify(id));
    this.router.navigate(['chat']);
  }

  showSearch() {
    this.search = !this.search;
  }

  openAddChat() {
    const user: any = JSON.parse(localStorage.getItem('loggedIn'));

    this.chatService.createNewChat(user.uid, user.uid);
  }


}
