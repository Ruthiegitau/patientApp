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

  savePatient(firstName:string,lastName:string,phoneNumber:string,emailAddress:string,dateofBirth:string){
    var newPatient = new Patient(firstName,lastName,phoneNumber,emailAddress,dateofBirth);

    this.patients.push(newPatient);
  }
  selectedPatient: Patient = null;
  showDetails(clickedPatient: Patient) {
    this.selectedPatient = clickedPatient;
  }
  finishedEditing() {
    this.selectedPatient = null;
  }

  del(deletePatient: Patient){
    var i = this.patients.indexOf(deletePatient);
      this.patients.splice(i,1);

  }
}

export class Patient {
  public done: boolean = false;
  constructor(public firstName: string, public lastName: string, public phoneNumber: string, public emailAddress: string, public dateofBirth: string) {   }
}
