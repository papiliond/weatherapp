import { NgModule, ModuleWithProviders } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AppComponent } from './containers/app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './containers/home/home.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { LocationService } from './services/location.service';
import { HttpClient } from '@angular/common/http';

export function setupLocationService(http: HttpClient) {
  return new LocationService(http);
}

@NgModule({
  imports: [SharedModule],
  declarations: [
    AppComponent,
    HomeComponent,
    HomePageComponent,
    NavMenuComponent
  ],
  providers: [
    {
      provide: LocationService,
      useFactory: setupLocationService,
      deps: [HttpClient]
    }
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [LocationService]
    };
  }
}
