import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyADHXUCHN0l87-O9zkiu4n0pHDQ-Ki42B8',
      authDomain: 'citi-login-ae617.firebaseapp.com',
      databaseURL: 'https://citi-login-ae617.firebaseio.com',
      projectId: 'citi-login-ae617',
      storageBucket: 'citi-login-ae617.appspot.com',
      messagingSenderId: '985767086509',
      appId: '1:985767086509:web:c3c06bb129f10d3e243924',
      measurementId: 'G-719F2CR6HQ',
    }),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
