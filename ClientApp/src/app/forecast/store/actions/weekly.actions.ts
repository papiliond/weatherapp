import { Action } from '@ngrx/store';

export enum WeeklyActionTypes {
  FetchWeekly = '[WeeklyForecast] Fetch Weekly',
  FetchWeeklySuccess = '[WeeklyForecast] Fetch Weekly Success',
  FetchWeeklyFailure = '[WeeklyForecast] Fetch Weekly Failure'
}

export class FetchWeekly implements Action {
  readonly type = WeeklyActionTypes.FetchWeekly;
}

export class FetchWeeklySuccess implements Action {
  readonly type = WeeklyActionTypes.FetchWeeklySuccess;

  constructor(public payload: WeeklyForecast) {}
}

export class FetchWeeklyFailure implements Action {
  readonly type = WeeklyActionTypes.FetchWeeklyFailure;
}

export type WeeklyActions =
  | FetchWeekly
  | FetchWeeklySuccess
  | FetchWeeklyFailure;
