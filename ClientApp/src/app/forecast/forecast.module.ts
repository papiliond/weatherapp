import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ForecastComponent } from './containers/forecast/forecast.component';
import { RouterModule, Route } from '@angular/router';

const ROUTES: Route[] = [
  { path: '', component: ForecastComponent}
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTES),
  ],
  declarations: [ForecastComponent]
})
export class ForecastModule { }
