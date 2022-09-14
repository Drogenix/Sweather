import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppHomeComponent } from './app-home/app-home.component';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { AppSearchComponent } from './app-search/app-search.component';
import { AppDailyComponent } from './app-daily/app-daily.component';
import { AppWeekendComponent } from './app-weekend/app-weekend.component';
import { AppMonthComponent } from './app-month/app-month.component';
import {HttpClientModule} from "@angular/common/http";
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppMonthDetailedComponent } from './app-month/app-month-detailed/app-month-detailed.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppHomeComponent,
     WeatherInfoComponent,
     AppSearchComponent,
     AppDailyComponent,
     AppWeekendComponent,
     AppMonthComponent,
     AppNavbarComponent,
     AppMonthDetailedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path:'', redirectTo:'search', pathMatch:'full'
      },
      {
        path:'weather', component:WeatherInfoComponent, data:{animation:'weatherPage'}
      },
      {
        path:'search', component:AppSearchComponent, data:{animation:'homePage'}
      }
    ])

  ],
  providers: [HttpClientModule],
  bootstrap: [AppHomeComponent]
})
export class AppModule { }
