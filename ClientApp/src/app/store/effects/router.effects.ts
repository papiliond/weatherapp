import { Actions, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

import { map, tap } from 'rxjs/operators';

import { RouterActionTypes, Go } from '../actions';

@Injectable()
export class RouterEffects {
  constructor(private actions$: Actions, private router: Router, private location: Location) {}

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(RouterActionTypes.Go),
    map((action: Go) => action.payload),
    tap(({ path, query: queryParams, extras }) => {
      this.router.navigate(path, { queryParams, ...extras });
    })
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType(RouterActionTypes.Back),
    tap(() => this.location.back())
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    ofType(RouterActionTypes.Forward),
    tap(() => this.location.forward())
  );
}
