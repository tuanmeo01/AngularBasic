import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-basic';
  user = {
    name: 'tuan',
    age: '21',
  };
  handleClick() {
    console.log('clicked');
  }
}
