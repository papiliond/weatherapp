import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  template: `
    <h1>
      There will be forecasts...
    </h1>
  `,
  styles: []
})
export class ForecastComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
