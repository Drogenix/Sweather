import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {map, Observable, retry, shareReplay, throwError} from "rxjs";
import {environment} from "../../environments/environment.prod";
import {DatePipe} from "@angular/common";
import {WeatherForecast} from "./entity/weather-forecast";
import {Forecast} from "./entity/forecast";

const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  private _apiKey: string;
  private _usedTokensCount = 0;
  constructor(private http:HttpClient) {
    this.updateApiKey();
  }

  updateApiKey()
  {
    this._apiKey = JSON.stringify(environment.apiKeys[this._usedTokensCount].token);

    this._apiKey = this._apiKey.substring(1, this._apiKey.length-1)

    this._usedTokensCount = 1;
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Возникла ошибка:', error.error);
    }
    else if(error.status === 429)
    {
      this.updateApiKey();

      console.error(
        `Ошибка на сервере: ${error.status}, тело ошибки: `, error.error);
    }

    return throwError(() =>
      new Error('Сервисы не доступны, попробуйте перезагрузить страницу или вернитесь позже.')
    );
  }

  getMonthWeatherForecast(city: string): Observable<WeatherForecast>
  {
    const datePipe: DatePipe = new DatePipe('en-US')

    const now = new Date();

    const nowDateString = datePipe.transform(now, 'YYYY-MM-dd')

    const afterMonth = now.setMonth(now.getMonth()+1, now.getDate());

    const afterMonthDateString = datePipe.transform(afterMonth, 'YYYY-MM-dd')

    const url = BASE_URL + city + '/' + nowDateString + '/' + afterMonthDateString +'?unitGroup=metric&include=days&key='+ this._apiKey +'&contentType=json';

    return this.http.get<WeatherForecast>(url);
  }
  getDayWeatherForecast(city: string) : Observable<Forecast[]>
  {
    const url = BASE_URL + city +'/today?unitGroup=metric&include=hours&key='+ this._apiKey +'&contentType=json';

    return this.http.get<WeatherForecast>(url).pipe(
      map((dailyForecast)=> dailyForecast.days[0].hours),
      retry(2),
      shareReplay(1));
  }
}
