import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { CoreModule } from './core/core.module';

import * as fromRoot from './store';
import * as fromRouter from '@ngrx/router-store';

import { AppComponent } from './core/containers/app.component';
import { HomeComponent } from './core/containers/home/home.component';
import { HttpClient } from '@angular/common/http';
import { LocationService } from './core/services/location.service';

export function setupLocationService(http: HttpClient) {
  return new LocationService(http);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path: 'forecast',
        loadChildren: 'app/forecast/forecast.module#ForecastModule'
      }
    ]),
    StoreModule.forRoot(fromRoot.reducers, {
      metaReducers: fromRoot.metaReducers
    }),
    fromRouter.StoreRouterConnectingModule.forRoot({
      stateKey: 'router'
    })
  ],
  providers: [
    {
      provide: LocationService,
      useFactory: setupLocationService,
      deps: [HttpClient]
    },
    {
      provide: fromRouter.RouterStateSerializer,
      useClass: fromRoot.CustomRouterSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
