import {Routes} from "@angular/router";
import {WeatherForecastComponent} from "./pages/weather-forecast/weather-forecast.component";
import {SearchComponent} from "./components/search/search.component";

export const routes: Routes = [
  {
    path:'', component:SearchComponent, pathMatch:'full'
  },
  {
    path:'weather', component:WeatherForecastComponent, data:{animation:'weatherPage'}
  }
]
