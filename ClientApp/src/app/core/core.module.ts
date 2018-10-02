import { NgModule, ModuleWithProviders } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AppComponent } from './containers/app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './containers/home/home.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { LocationService } from './services/location.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [SharedModule],
  declarations: [
    AppComponent,
    HomeComponent,
    HomePageComponent,
    NavMenuComponent
  ]
})
export class CoreModule {
  static forRoot(params?: any): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [HttpClient]
    };
  }
}
