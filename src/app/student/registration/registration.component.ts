import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { min } from 'rxjs';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationForm!: FormGroup;
  showToast: boolean = false;
  toastMessage: string = '';
  toastType: string = '';  

  constructor(
    private fb: FormBuilder,
    private _studentService: StudentService,
    private _router: Router
  ) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,

          Validators.pattern(
            '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'
          ),
        ],
      ],
      phoneNumber: [
        '',
        [Validators.pattern('^[0-9]{10}$')],
      ],
      course: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      termsCondition: [true, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      //   console.log(this.registrationForm.value);
      const studentdata: IStudent = this.registrationForm.value;
      this._studentService.addStudent(studentdata);


      // success toast
      this.toastMessage = 'Student Registered Successfully!';
      this.toastType = 'success';
      this.showToast = true;

      this.registrationForm.reset();

      setTimeout(() => {
        this._router.navigate(['/students']);
      }, 2000); 
    }
  }
    
  
}

export interface IStudent {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  course: string;
  gender: string;
  termsCondition: boolean;
}
