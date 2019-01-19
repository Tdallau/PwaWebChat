import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppMaterialModule } from './app-material/app-material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './navigation/header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChatsComponent } from './chats/chats.component';
import { SettingsComponent } from './settings/settings.component';
import { ChatComponent } from './chats/chat/chat.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './auth-dialog/login/login.component';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { RegisterComponent } from './auth-dialog/register/register.component';

import { HttpClientModule } from '@angular/common/http'; 
import { 
  AuthGuardService as AuthGuard 
} from './_services/auth/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ChatsComponent,
    SettingsComponent,
    ChatComponent,
    LoginComponent,
    AuthDialogComponent,
    RegisterComponent,
  ],
  entryComponents: [
    AuthDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FormsModule, ReactiveFormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // i
    AngularFireStorageModule,
    HttpClientModule,
  ],
  exports: [
    AppMaterialModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
