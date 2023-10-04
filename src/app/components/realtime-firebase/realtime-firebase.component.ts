import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs"

// import { AngularFireDatabase } from '@angular/fire/compat/database';
// import {getDatabase, ref, set} from "firebase/database"

@Component({
  selector: 'app-realtime-firebase',
  templateUrl: './realtime-firebase.component.html',
  styleUrls: ['./realtime-firebase.component.css']
})
export class RealtimeFirebaseComponent implements OnInit{

    // for later use in constructor if i find the problem
  // private db:AngularFireDatabase
  constructor(){
    
   
  }
  ngOnInit(): void {
    
  }
  
  
  
  
  AddUser(userForm:any){

      // TEST 1
    // const userId = "uniqueUserId";
    // const db = getDatabase();
    // const reference = ref(db, "users/");

    // set(reference, {
    //   username: userForm.username,
    //   email:userForm.email,
    //   password: userForm.password
    // })


        //TEST 2
    // this.db.list("users").push(userForm.value).then(() => {
    //   console.log("user added")
    // })
  }
}
