import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {WeatherApiService} from "../../core/weather-api.service";
import {combineLatest, map, Observable, switchMap, tap} from "rxjs";
import {Forecast} from "../../core/entities/forecast";
import {WeatherForecast} from "../../core/entities/weather-forecast";

type GeneralForecast = {
  month: WeatherForecast,
  daily: Forecast[]
}

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit{
  weatherForecast$:Observable<GeneralForecast>;

  constructor(private weatherApiService:WeatherApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const city$ = this.activatedRoute.queryParams.pipe(
      map((params)=> params['city']))

    const monthWeatherForecast$ = city$.pipe(
      switchMap((city:string)=> this.weatherApiService.getMonthWeatherForecast(city)),
      tap((monthWeatherForecast)=>{
        monthWeatherForecast.days = this._setIconsPath(monthWeatherForecast.days);
      })
    )

    const dailyWeatherForecast$ = city$.pipe(
      switchMap((city)=> this.weatherApiService.getDayWeatherForecast(city)),
      tap((dailyWeatherForecast)=>{
        dailyWeatherForecast = this._setIconsPath(dailyWeatherForecast);
      })
    )

    this.weatherForecast$ = combineLatest([monthWeatherForecast$, dailyWeatherForecast$]).pipe(
      map(([monthWeatherForecast, dailyWeatherForecast]) => {
        return {month: monthWeatherForecast, daily: dailyWeatherForecast}
      })
    )
  }
  private _setIconsPath(weatherForecast: Forecast[]) : Forecast[]{
    for (let forecast of weatherForecast) {
      switch (forecast.conditions) {
        case 'Rain':
          forecast.icon = "assets/icons/white/svg/rain.svg";
          break;
        case 'Sunny':
          forecast.icon = "assets/icons/white/svg/sunny.svg";
          break;
        case 'Partially cloudy':
          forecast.icon = "assets/icons/white/svg/partlycloudy.svg";
          break;
        case 'Rain, Partially cloudy':
          forecast.icon = "assets/icons/white/svg/chancerain.svg";
          break;
        case 'Clear':
          forecast.icon = "assets/icons/white/svg/clear.svg";
          break;
        case 'Overcast':
          forecast.icon = "assets/icons/white/svg/cloudy.svg";
          break;
        case 'Rain, Overcast':
          forecast.icon = "assets/icons/white/svg/chancerain.svg";
          break;
        case 'Snow':
          forecast.icon = "assets/icons/white/svg/snow.svg";
          break;
        case 'Snow, Overcast':
          forecast.icon = "assets/icons/white/svg/snow.svg";
          break;
        case 'Snow, Rain, Overcast':
          forecast.icon = "assets/icons/white/svg/sleet.svg";
          break;
        case 'Snow, Rain, Partially cloudy':
          forecast.icon = "assets/icons/white/svg/chancesnow.svg";
          break;
      }
    }
    return weatherForecast;
  }

}
