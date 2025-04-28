import { Component } from '@angular/core';
import { IStudent } from '../registration/registration.component';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  students:IStudent[] = [];
  filteredStudents: IStudent[] = [];
  selectedCourse: string = '';

  constructor(private _studentService:StudentService){}
  
  ngOnInit(){
    console.log('studentlist component ngOnInit executed')
    this.students = this._studentService.getList();
    this.filteredStudents = [...this.students];
  }

  filterStudents(): void {
    if (this.selectedCourse) {
      console.log(this.selectedCourse, this.students)
      this.filteredStudents = this.students.filter(stud => stud.course === this.selectedCourse);
    } else {
      this.filteredStudents = [...this.students];
    }
  }
}
