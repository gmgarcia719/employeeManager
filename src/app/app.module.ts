import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
//Material
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatListModule, MatToolbarModule } from '@angular/material';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { RouterModule } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ViewEmployeesComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: CreateEmployeeComponent },
      { path: 'employeeList', component: ViewEmployeesComponent }
    ]),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    //Firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    //Material
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
