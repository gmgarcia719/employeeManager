import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.scss']
})
export class ViewEmployeesComponent implements OnInit {
  items: Array<any>;
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.firebaseService.getEmployees()
      .subscribe(result => {
        this.items = result;
      })
  }
}
