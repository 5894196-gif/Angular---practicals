// Assignment No. 02
// Write an Angular program to demonstrate string interpolation by displaying a dynamic message stored in a component class.

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 20 Interpolation';
  username = 'DevUser';
  today = new Date();

  getGreeting(): string {
    return `Welcome back, ${this.username}!`;
  }
}
