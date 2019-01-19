import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChatsComponent } from './chats/chats.component';
import { ChatComponent } from './chats/chat/chat.component';
import { SettingsComponent } from './settings/settings.component';

import {
  AuthGuardService as AuthGuard
} from './_services/auth/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'chats', component: ChatsComponent, canActivate: [AuthGuard]  },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
