import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherForecastComponent } from './pages/weather-forecast/weather-forecast.component';
import { SearchComponent } from './components/search/search.component';
import { WeekendForecastComponent } from './components/weekend-forecast/weekend-forecast.component';
import { MonthForecastComponent } from './components/month-forecast/month-forecast.component';
import {HttpClientModule} from "@angular/common/http";
import { MonthForecastDayDetailsComponent } from './components/month-forecast-day-details/month-forecast-day-details.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouteReuseStrategy, RouterModule} from "@angular/router";
import {WeatherService} from "./core/weather.service";
import {routes} from "./routes";
import {DailyForecastComponent} from "./components/daily-forecast/daily-forecast.component";
import {RootComponent} from "./pages/root/root.component";
import { SpinnerComponent } from './components/spinner/spinner.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CustomRouteReuseStrategy} from "./core/custom-route-reuse-strategy";
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
     RootComponent,
     WeatherForecastComponent,
     SearchComponent,
     DailyForecastComponent,
     WeekendForecastComponent,
     MonthForecastComponent,
     MonthForecastDayDetailsComponent,
     SpinnerComponent,
     ErrorComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"}),
        ReactiveFormsModule
    ],
  providers: [HttpClientModule, WeatherService, {provide:RouteReuseStrategy, useClass:CustomRouteReuseStrategy}],
  bootstrap: [RootComponent]
})
export class AppModule { }
