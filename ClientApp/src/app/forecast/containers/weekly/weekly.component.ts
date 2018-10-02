import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromForecast from '../../store';

@Component({
  selector: 'app-weekly',
  template: `
    <app-weekly-page [weeklyForecast]="weeklyForecast$ | async"></app-weekly-page>
  `
})
export class WeeklyComponent implements OnInit {
  weeklyForecast$ = this.forecastStore.select(
    fromForecast.selectWeeklyForecast
  );

  constructor(private forecastStore: Store<fromForecast.ForecastState>) {}

  ngOnInit() {
    this.forecastStore.dispatch(new fromForecast.FetchWeekly());
  }
}
