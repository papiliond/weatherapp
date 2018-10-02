import { Action } from '@ngrx/store';

export enum CoreActionTypes {
  FetchLocation = '[Core] Fetch Location',
  FetchLocationFailure = '[Core] Fetch Location Failure',
  SetLocation = '[Core] Set Location'
}

export class SetLocation implements Action {
  readonly type = CoreActionTypes.SetLocation;

  constructor(public payload: string) {}
}

export class FetchLocation implements Action {
  readonly type = CoreActionTypes.FetchLocation;
}

export class FetchLocationFailure implements Action {
  readonly type = CoreActionTypes.FetchLocationFailure;
}

export type CoreActions = FetchLocation | FetchLocationFailure | SetLocation;
