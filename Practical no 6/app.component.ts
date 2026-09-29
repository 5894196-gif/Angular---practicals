// Assignment 06
// Create an Angular App to demonstrate the two way data binding.

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Enables template-driven forms(ngModel)
import { CommonModule } from '@angular/common'; // Provides built-in directives and pipes(ngfor & ngIf)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Twowaydatabinding';
  name: string = '';
  surname = 'Gawade';
}
