import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';

import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromDaily from '../actions/daily.actions';
import * as fromRoot from '../../../store';

import { ForecastService } from '../../services/forecast.service';
import { DailyForecast } from '../../models/daily-forecast.model';

@Injectable()
export class DailyEffects {
  constructor(
    private actions$: Actions,
    private forecastService: ForecastService,
    private store: Store<fromRoot.State>
  ) {}

  @Effect()
  fetchDaily$ = this.actions$
    .ofType(fromDaily.DailyActionTypes.FetchDaily)
    .pipe(
      withLatestFrom(this.store.select(fromRoot.selectLocation)),
      switchMap(([action, location]: [fromDaily.FetchDaily, string]) =>
        this.forecastService.getDailyForecast(location).pipe(
          map(
            (dailyForecast: DailyForecast) =>
              new fromDaily.FetchDailySuccess(dailyForecast)
          ),
          catchError(error => of(new fromDaily.FetchDailyFailure()))
        )
      )
    );
}
