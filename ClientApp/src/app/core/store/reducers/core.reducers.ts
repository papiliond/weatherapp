import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import * as fromCore from '../actions';
import { CoreActions } from '../actions';

export interface CoreState {
  location?: string;
}

const initialState: CoreState = {};

export function reducer(state: CoreState = initialState, action: CoreActions) {
  switch (action.type) {
    case fromCore.CoreActionTypes.SetLocation:
      return {
        location: action.payload
      };

    default:
      return state;
  }
}
