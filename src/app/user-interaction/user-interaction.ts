import { Component } from '@angular/core';

@Component({
  selector: 'app-user-interaction',
  standalone: true,
  templateUrl: './user-interaction.html',
  styleUrl: './user-interaction.css'
})
export class UserInteractionComponent {

  message: string = '';
  inputText: string = '';

  onButtonClick() {
    this.message = 'Button was clicked!';
  }

  onMouseEnter() {
    this.message = 'Mouse is over the box!';
  }

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.inputText = value;
  }
}