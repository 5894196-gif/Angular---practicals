// Assignment No. 05
// Create an angular app to display student portfolio.

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  student = {
    name: 'Kiran Gawade',
    title: 'Full Stack Developer',
    bio: `Passionate developer with experience in Angular, Node.js, and modern web technologies.`,
    skills: ['Angular', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'CSS'],
    projects: [
      {
        name: 'Portfolio Website',
        description: 'A personal website to showcase my work and skills.',
        link: 'https://github.com/5667965-png',
      },
      {
        name: 'Task Manager App',
        description: 'A task management app built with Angular and Firebase.',
        link: 'https://github.com/5667965-png/task-manager',
      },
    ],
    contact: {
      email: 'kiran.gawade@example.com',
      phone: '+91-9876543210',
      linkedin: 'https://linkedin.com/in/kirangawade',
      github: 'https://github.com/5667965-png',
    },
  };
}
