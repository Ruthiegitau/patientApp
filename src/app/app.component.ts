import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public patients: Patient[] = [
      new Patient("Moses Okemwa", "tyty","123456","d@ymail.com","1998-12-12")
  ]

  savePatient(firstName:string,lastName:string,phoneNumbe:string,emailAddress:string,dateofBirth:string){
    var newPatient = new Patient(firstName,lastName,phoneNumbe,emailAddress,dateofBirth);

    this.patients.push(newPatient);
  }
  // selectedPatient: Patient = null;
  // showDetails(clickedPatient: Patient) {
  //   this.selectedPatient = clickedPatient;
  // }
  // finishedEditing() {
  //   this.selectedPatient = null;
  // }
}

export class Patient {
  public done: boolean = false;
  constructor(public firstName: string, public lastName: string, public phoneNumbe: string, public emailAddress: string, public dateofBirth: string) {   }
}
