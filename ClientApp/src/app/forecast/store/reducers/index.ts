import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action
} from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromCore from '../../../core/store';
import * as fromDaily from './daily-forecast.reducer';
import * as fromWeekly from './weekly-forecast.reducer';

export interface ForecastState {
  daily: fromDaily.DailyForecastState;
  weekly: fromWeekly.WeeklyForecastState;
}

export const reducers: ActionReducerMap<ForecastState> = {
  daily: fromDaily.reducer,
  weekly: fromWeekly.reducer
};

export interface State extends fromRoot.State {
  forecast: ForecastState;
}

export function resetStateReducer(reducer: ActionReducer<ForecastState>) {
  return function resetReducer(
    state: ForecastState | undefined,
    action: Action
  ) {
    return reducer(
      action.type === fromCore.CoreActionTypes.SetLocation ? undefined : state,
      action
    );
  };
}

export const metaReducers: MetaReducer<ForecastState>[] = [resetStateReducer];

// Daily Forecast Selectors

export const selectDailyForecastState = createFeatureSelector('daily');
export const selectDailyForecast = createSelector(
  selectDailyForecastState,
  (state: fromDaily.DailyForecastState) => state ? state.data : undefined
);

// Weekly Forecast Selectors

export const selectWeeklyForecastState = createFeatureSelector('weekly');
export const selectWeeklyForecast = createSelector(
  selectDailyForecastState,
  (state: fromWeekly.WeeklyForecastState) => state ? state.data : undefined
);
