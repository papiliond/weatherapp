import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { CoreModule } from './core/core.module';

import * as fromRoot from './store';
import * as fromRouter from '@ngrx/router-store';

import { AppComponent } from './core/containers/app.component';
import { HomeComponent } from './core/containers/home/home.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot(fromRoot.effects),
    CoreModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
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
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    {
      provide: fromRouter.RouterStateSerializer,
      useClass: fromRoot.CustomRouterSerializer
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
