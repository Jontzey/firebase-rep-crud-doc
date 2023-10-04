import { NgModule, Component, inject } from '@angular/core';
import {CommonModule} from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// HERE is firestore imported 
import {initializeApp, provideFirebaseApp} from "@angular/fire/app"
import {provideFirestore, getFirestore} from "@angular/fire/firestore"
import {environment} from "../environments/environment"
import { AppRoutingModule } from './app-routing.module';

import {DatabaseModule} from '@angular/fire/database';




import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RealtimeFirebaseComponent } from './components/realtime-firebase/realtime-firebase.component';
import { FirestoreComponent } from './components/firestore/firestore.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RealtimeFirebaseComponent,
    FirestoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore(initializeApp(environment.firebase))),
    CommonModule,
   DatabaseModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 
  
}
