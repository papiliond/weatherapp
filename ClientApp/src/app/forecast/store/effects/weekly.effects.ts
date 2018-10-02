import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { withLatestFrom, switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromWeekly from '../actions/weekly.actions';
import * as fromRoot from '../../../store';

import { ForecastService } from '../../services/forecast.service';

@Injectable()
export class WeeklyEffects {

  constructor(
    private actions$: Actions,
    private forecastService: ForecastService,
    private store: Store<fromRoot.State>
  ) {}

  @Effect()
  fetchWeekly$ = this.actions$
    .ofType(fromWeekly.WeeklyActionTypes.FetchWeekly)
    .pipe(
      withLatestFrom(this.store.select(fromRoot.selectLocation)),
      switchMap(([action, location]: [fromWeekly.FetchWeekly, string]) =>
        this.forecastService.getWeeklyForecast(location).pipe(
          map(
            (WeeklyForecast: WeeklyForecast) =>
              new fromWeekly.FetchWeeklySuccess(WeeklyForecast)
          ),
          catchError(error => of(new fromWeekly.FetchWeeklyFailure()))
        )
      )
    );
}
