import { Component, OnInit, Input } from '@angular/core';
import { DailyForecast } from '../../models/daily-forecast.model';

@Component({
  selector: 'app-daily-page',
  templateUrl: './daily-page.component.html',
})
export class DailyPageComponent implements OnInit {
  @Input()
  dailyForecast?: DailyForecast;

  constructor() {}

  ngOnInit() {}
}
