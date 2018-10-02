import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../../environments/environment';

import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './router.reducer';
import * as fromCore from '../../core/store/reducers';
import { CoreState } from '../../core/store/reducers';

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  core: fromCore.CoreState
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer,
  core: fromCore.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];


export * from './router.reducer';

// Router State Selectors

export const selectRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('router');

export const selectUrl = createSelector(
  selectRouterState,
  (routerState: fromRouter.RouterReducerState<RouterStateUrl>) =>
    routerState ? routerState.state.url : undefined
);

// Core State Selectors

export const selectCoreState = createFeatureSelector<CoreState>('core');
export const selectLocation = createSelector(selectCoreState, (state: CoreState) => state.location);