import * as fromWeekly from '../actions/weekly.actions';

export interface WeeklyForecastState {
  data?: WeeklyForecast;
}

export const initialState: WeeklyForecastState = {};

export function reducer(
  state = initialState,
  action: fromWeekly.WeeklyActions
): WeeklyForecastState {
  switch (action.type) {
    case fromWeekly.WeeklyActionTypes.FetchWeeklySuccess:
      return {
        data: action.payload
      };

    default:
      return state;
  }
}
