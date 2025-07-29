import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
blogs = [
    {
      title: 'Exploring the Power of Angular 16',
      description: 'Dive into the latest features and enhancements of Angular 16 for modern web development.'
    },
    {
      title: 'Building REST APIs with NestJS',
      description: 'Learn how to create robust and scalable APIs using the NestJS framework.'
    },
    {
      title: 'JWT Authentication in Web Apps',
      description: 'A guide to securing your web applications using JSON Web Tokens (JWT).'
    },
    {
      title: 'Understanding TypeScript Decorators',
      description: 'Learn how decorators work in TypeScript and how they power Angular’s dependency injection system.'
    },
    {
      title: 'Routing and Navigation in Angular',
      description: 'Master Angular Router to build multi-page apps with dynamic content loading and navigation guards.'
    },
    {
      title: 'Deploying Angular Apps on Firebase',
      description: 'Step-by-step guide to deploying your Angular project to Firebase Hosting with a custom domain.'
    }
  ];
}
