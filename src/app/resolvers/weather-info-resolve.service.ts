import { Injectable } from '@angular/core';
import {Dayweather} from "../data-models/dayweather";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {WeatherApiService} from "../api-service/weather-api.service";

@Injectable({
  providedIn: 'root'
})
export class MonthWeatherInfoResolveService implements Resolve<Dayweather[]>{

  constructor(private weatherService:WeatherApiService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Dayweather[]>{
    return this.weatherService.getMonthInfo();
  }
}
