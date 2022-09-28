import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Dayweather} from "../data-models/dayweather";
import {WeatherApiService} from "../api-service/weather-api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DailyWeatherInfoResolveService implements Resolve<Dayweather[]>{

  constructor(private weatherService:WeatherApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Dayweather[]>{
    return this.weatherService.getDailyInfo();
  }
}
