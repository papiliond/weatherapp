import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './components/home/home.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { AppComponent } from './containers/app.component';

@NgModule({
  imports: [SharedModule],
  declarations: [AppComponent, HomeComponent, NavMenuComponent]
})
export class CoreModule {}
