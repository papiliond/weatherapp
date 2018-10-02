import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../store';
import * as fromCore from '../../core/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  location$ = this.store.select(fromRoot.selectLocation);

  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {
    this.onFetch();
  }

  onFetch() {
    this.store.dispatch(new fromCore.FetchLocation());
  }
}
