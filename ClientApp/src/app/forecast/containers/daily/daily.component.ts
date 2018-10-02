import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromForecast from '../../store';

@Component({
  selector: 'app-daily',
  template: `
    <app-daily-page [dailyForecast]="dailyForecast$ | async"><app-daily-page>
  `,
})
export class DailyComponent implements OnInit {
  dailyForecast$ = this.forecastStore.select(
    fromForecast.selectDailyForecast
  );

  constructor(private forecastStore: Store<fromForecast.ForecastState>) {}

  ngOnInit() {
    this.forecastStore.dispatch(new fromForecast.FetchDaily());
  }

}
