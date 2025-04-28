import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from './registration/registration.component';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentsRecords: IStudent[] = [];

  constructor() {
    console.log('constructor executed')
   
  }

  addStudent(student: IStudent) {
    this.studentsRecords.push(student);
    return this.studentsRecords
 
  }

  getList() {
    return structuredClone(this.studentsRecords);
  }

}
