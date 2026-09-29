// Assignment No. 07
// Simple routing demo

// create project: ng new myApp --routing
// add components: ng generate component about, ng generate component home, ng generate component contact

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routingapp';
}
