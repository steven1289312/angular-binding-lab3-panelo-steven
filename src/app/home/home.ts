import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  appTitle: string = 'Welcome to Angular 20';
  userImageUrl: string = 'https://via.placeholder.com/150';
  isHighlighted: boolean = true;
  currentDate: Date = new Date();
}
