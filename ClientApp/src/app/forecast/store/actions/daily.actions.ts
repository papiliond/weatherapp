import { Action } from '@ngrx/store';

import { DailyForecast } from '../../models/daily-forecast.model';

export enum DailyActionTypes {
  FetchDaily = '[DailyForecast] Fetch Daily',
  FetchDailySuccess = '[DailyForecast] Fetch Daily Success',
  FetchDailyFailure = '[DailyForecast] Fetch Daily Failure',
}

export class FetchDaily implements Action {
  readonly type = DailyActionTypes.FetchDaily;
}

export class FetchDailySuccess implements Action {
  readonly type = DailyActionTypes.FetchDailySuccess;

  constructor(public payload: DailyForecast) {}
}

export class FetchDailyFailure implements Action {
  readonly type = DailyActionTypes.FetchDailyFailure;
}

export type DailyActions = FetchDaily | FetchDailySuccess | FetchDailyFailure;
