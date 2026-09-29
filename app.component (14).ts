// Assignment 04
// Create an angular app to display a Time Table using one way data binding

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subjects = ['ML', 'FSD', 'SF', 'ASD'];

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  periods = ['9AM-10AM', '10AM-11AM', '11AM-12PM', '12PM-1PM'];

  timetable: string[][] = [
    ['ML', 'FSD', 'SF', 'ASD'],
    ['FSD', 'ASD', 'ML', 'SF'],
    ['SF', 'ML', 'FSD', 'ASD'],
    ['ASD', 'SF', 'FSD', 'ML'],
    ['ML', 'SF', 'ASD', 'FSD'],
  ];
}
