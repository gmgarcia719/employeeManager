import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fireStore: AngularFirestore) { }
  //Get all of the employees
  getEmployees = () => {
    return this.fireStore.collection("employeeInfo").snapshotChanges();
  }
  //Create an Employee
  createUser = (value: Employee) => {
    return this.fireStore.collection('employeeInfo').add({
      firstName: value.firstName,
      lastName: value.lastName,
      address: Object.assign({}, value.address)
    });
  }
  //Delete an Employee
  deleteEmployee = data => {
    this.fireStore.collection("employeeInfo")
      .doc(data.payload.doc.id)
      .delete();
  }
}
