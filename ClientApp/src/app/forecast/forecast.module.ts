import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Route } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromForecastState from './store';

import { ForecastService } from './services/forecast.service';

import { ForecastComponent } from './containers/forecast.component'
import { DailyComponent } from './containers/daily/daily.component';
import { WeeklyComponent } from './containers/weekly/weekly.component';
import { WeeklyPageComponent } from './components/weekly-page/weekly-page.component';
import { DailyPageComponent } from './components/daily-page/daily-page.component';

const ROUTES: Route[] = [
  { path: '', redirectTo: '/forecast/daily'},
  {
    path: '',
    component: ForecastComponent,
    children: [
      { path: 'daily', component: DailyComponent },
      { path: 'weekly', component: WeeklyComponent }
    ]
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('forecastState', fromForecastState.reducers, {
      metaReducers: fromForecastState.metaReducers
    }),
    EffectsModule.forFeature(fromForecastState.effects)
  ],
  providers: [ForecastService],
  declarations: [ForecastComponent, WeeklyComponent, WeeklyPageComponent, DailyComponent, DailyPageComponent]
})
export class ForecastModule {}
