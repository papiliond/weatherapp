import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../store';
import * as fromCore from '../../store';

@Component({
  selector: 'app-home',
  template: `
    <app-home-page (setLocation)="onSetLocation($event)"></app-home-page>
  `,
})
export class HomeComponent {

  constructor(private store: Store<fromRoot.State>) { }

  onSetLocation(location: string) {
    this.store.dispatch(new fromCore.SetLocation(location));
  }
}
