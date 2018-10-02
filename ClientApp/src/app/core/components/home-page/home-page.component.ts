import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

  @Output()
  setLocation = new EventEmitter<string>();

  location = new FormControl('');

  constructor() {}
}
