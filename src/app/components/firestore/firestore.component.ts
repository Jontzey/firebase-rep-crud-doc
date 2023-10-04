import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs"
import { map } from 'rxjs/operators';

// Imported
import { 
  Firestore, 
  collection,
  collectionData,
  doc,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
  query,
  setDoc,
getFirestore } from '@angular/fire/firestore';
import { where } from 'firebase/firestore';
@Component({
  selector: 'app-firestore',
  templateUrl: './firestore.component.html',
  styleUrls: ['./firestore.component.css']
})
export class FirestoreComponent implements OnInit {

  allUsers!: any;
  isFormEdit:boolean = true;
  

  // inject firestore module
  constructor(private Fs:Firestore)
  {
    this.getCollection();
    
  }
  ngOnInit(): void {
  
}
  addFormData(FormData:any) {
      console.log(FormData.value)
      
        // Tänk att databasen består av collection dokument därför collection()
        // Nu vet hur vi ska spara information och använder det som en referens till databasen och sparar det i en variabel.
      const usersRef = collection(this.Fs, "users");
      // metod för lägga till i databasen addDoc(), Vi vet att vi vill ha en collection med user som vi skapade.
      // Vi använder den referensen som vi skapade till collection vi ville skapa.
      // och lägger till i addDoc() med datan vi vill skicka
      addDoc(usersRef, FormData.value).then(() => {
        console.log("Data has been saved");
        console.log(usersRef)
        this.getCollection();
      })
      .catch((err) => {
          console.log(err)
      })
  }


  async getCollection() {

    const userRef = await getDocs(collection(this.Fs, 'users'))
    
    let users:any = [];

    userRef.forEach(document => {
      users.push(document.data());
    });
    this.allUsers = users;
   
  }

 
   async deleteUser(docId:any, index:any){
    try {
      // Find the document using a query
      const userQuery = query(collection(this.Fs, 'users'), where('id', '==', docId));
      const queryGetUser = await getDocs(userQuery);
  
      if (!queryGetUser.empty) {
        // Assuming there's only one document with the same ID, get its reference
        const docRef = queryGetUser.docs[index].ref;
        
        // Delete the document
        await deleteDoc(docRef);
        this.getCollection();
        console.log('Document deleted successfully.');
      } else {
        console.log('Document not found.');
      }
    } catch (error) {
      console.error('Error deleting document:', error);
    }
   }

   editUser() {
      this.isFormEdit = false;
   }
  async EditFormData(FormData:any, index:any, docId:any) {

    try {
      // hitta rätt dokument
      const userQuery = query(collection(this.Fs, 'users'), where('id', '==', docId));
      const getUser = await getDocs(userQuery);
  
      if (!getUser.empty) {
        // Assuming there's only one document with the same ID, get its reference
        const docRef = getUser.docs[index].ref;
        const documentRef = doc(this.Fs, "users", docRef.id)
        // uppdatera the document
        await updateDoc(documentRef, FormData.value);
        this.getCollection();
        this.isFormEdit = true;
        console.log('Document updated successfully.');
      } else {
        console.log('Document not found.');
      }
    } catch (error) {
      console.error('Error deleting document:', error);
    }

   }

  
   
}
