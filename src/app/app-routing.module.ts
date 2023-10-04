import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FirestoreComponent } from './components/firestore/firestore.component';
import { RealtimeFirebaseComponent } from './components/realtime-firebase/realtime-firebase.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"Firestore", component:FirestoreComponent},
  {path:"Realtime", component:RealtimeFirebaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
