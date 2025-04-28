import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastComponent } from '../toast/toast.component';


const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'students', component: ListComponent }
];

@NgModule({
  declarations: [RegistrationComponent, ListComponent, ToastComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentModule { }
