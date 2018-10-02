import { Action } from '@ngrx/store';
import { DailyForecast } from '../../models/daily-forecast.model';

import * as fromDaily from '../actions/daily.actions';

export interface DailyForecastState {
  data?: DailyForecast;
}

export const initialState: DailyForecastState = {
  data: undefined
};

export function reducer(
  state = initialState,
  action: fromDaily.DailyActions
): DailyForecastState {
  switch (action.type) {
    case fromDaily.DailyActionTypes.FetchDailySuccess:
      return {
        data: action.payload
      };

    default:
      return state;
  }
}
