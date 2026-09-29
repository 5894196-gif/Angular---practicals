// Assignment No: 03
// Write an Angular program to display a list of 10 student names using an array.

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {
  studentNames: string[] = [
    'Amit',
    'Sneha',
    'Rahul',
    'Pooja',
    'Ravi',
    'Neha',
    'Suresh',
    'Kiran',
    'Anjali',
    'Vijay'
  ];
}
