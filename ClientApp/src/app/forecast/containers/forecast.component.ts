import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast',
  template: `
    <h1>
      Forecasts
    </h1>
    <ul class="pagination">
      <li class="page-item"><a class="page-link" routerLink="/forecast/daily">Daily</a></li>
      <li class="page-item"><a class="page-link" routerLink="/forecast/weekly">Weekly</a></li>
    </ul>
    <div>    
      <router-outlet></router-outlet>
    </div>
  `
})
export class ForecastComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
