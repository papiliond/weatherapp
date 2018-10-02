import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import * as fromCore from '../actions';

import { LocationService } from '../../services/location.service';
import { IpInfoModel } from '../../models/location.model';

@Injectable()
export class CoreEffects {
  constructor(
    private actions$: Actions,
    private locationService: LocationService
  ) {}

  @Effect()
  fetchLocation$ = this.actions$
    .ofType(fromCore.CoreActionTypes.FetchLocation)
    .pipe(
      switchMap(() =>
        this.locationService.getLocation().pipe(
          map(
            (ipInfo: IpInfoModel) => new fromCore.SetLocation(ipInfo.city)
          ),
          catchError(error => of(new fromCore.FetchLocationFailure()))
        )
      )
    );
}
