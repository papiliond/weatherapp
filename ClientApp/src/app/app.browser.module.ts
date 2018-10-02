import { NgModule } from '@angular/core';

import { AppModule } from './app.module';

import { AppComponent } from './core/containers/app.component';
import { EffectsModule } from '@ngrx/effects';

import * as fromRoot from './store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    AppModule,
    EffectsModule.forRoot(fromRoot.effects),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule {}
