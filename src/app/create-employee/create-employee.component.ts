import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Address } from '../models/address';
import { FirebaseService } from '../services/firebase.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['', [
      Validators.required,
      Validators.pattern("^[a-zA-Z\\s]*$")]],
    lastName: ['', [
      Validators.required,
      Validators.pattern("^[a-zA-Z\\s]*$")]],
    address: this.fb.group(
      {
        street: ['', [Validators.required]
        ],
        city: ['', [
          Validators.required,
          Validators.pattern("^[a-zA-Z\\s]*$")]],
        state: ['', [
          Validators.required,
          Validators.pattern("^[a-zA-Z\\s]*$")]],
        zip: ['', [
          Validators.required,
          Validators.pattern("^[0-9]*$")]]
      }
    )
  });
  constructor(private fb: FormBuilder, private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  onSubmit(value: Employee) {
    // Make sure to create a deep copy of the form-model
    const result: Employee = Object.assign({}, this.profileForm.value);
    result.address = Object.assign({}, result.address);

    this.firebaseService.createUser(result)
      .then(
        res => {
          this.profileForm.reset();
          //this.router.navigate(['/home']);
        }
      );
  }

}
