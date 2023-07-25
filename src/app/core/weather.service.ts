import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, map, Observable, shareReplay, throwError} from "rxjs";
import {environment} from "../../environments/environment.prod";
import {DatePipe} from "@angular/common";
import {Forecast} from "./entities/forecast";
import {WeatherForecast} from "./entities/weather-forecast";

const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

enum ERROR_MESSAGES{
  NOT_FOUND = "We didn't find any information about this region. Try search another city",
  SERVICE_NOT_AVAILABLE = "Sorry, services isn't available now. Please, try later"
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private _apiKey: string;
  private _usedTokensCount = 0;
  constructor(private http:HttpClient) {
    this._updateApiKey();
  }

  private _updateApiKey():boolean
  {
    const apiKey = environment.apiKeys[this._usedTokensCount];

    if(apiKey)
    {
      this._apiKey = apiKey;

      this._usedTokensCount += 1;

      return true;
    }

    return false;
  }

  private _getErrorMessage(error: HttpErrorResponse):string {
    if(error.status === 400){
      return ERROR_MESSAGES.NOT_FOUND;
    }

    return ERROR_MESSAGES.SERVICE_NOT_AVAILABLE;
  }

  getMonthWeatherForecast(city: string) : Observable<WeatherForecast> {
    const datePipe: DatePipe = new DatePipe('en-US')

    let now = new Date();

    const nowDateString = datePipe.transform(now, 'YYYY-MM-dd')

    const afterMonth = now.setMonth(now.getMonth()+1, now.getDate());

    const afterMonthDateString = datePipe.transform(afterMonth, 'YYYY-MM-dd')

    const url = BASE_URL + city + '/' + nowDateString + '/' + afterMonthDateString +'?unitGroup=metric&include=days&key='+ this._apiKey +'&contentType=json';

    return this.http.get<WeatherForecast>(url).pipe(
      catchError((err:HttpErrorResponse)=> {
        const error = this._getErrorMessage(err);

        if(this._updateApiKey()){
          const url = BASE_URL + city + '/' + nowDateString + '/' + afterMonthDateString +'?unitGroup=metric&include=days&key='+ this._apiKey +'&contentType=json';

          return this.http.get<WeatherForecast>(url);
        }

        return throwError(()=> error)
      })
    );
  }
  getDayWeatherForecast(city: string) : Observable<Forecast[]>
  {
    const url = BASE_URL + city +'/today?unitGroup=metric&include=hours&key='+ this._apiKey +'&contentType=json';

    return this.http.get<WeatherForecast>(url).pipe(
      catchError((err:HttpErrorResponse)=> {
        const error = this._getErrorMessage(err);

        if(this._updateApiKey()){
          const url = BASE_URL + city +'/today?unitGroup=metric&include=hours&key='+ this._apiKey +'&contentType=json';

          return this.http.get<WeatherForecast>(url);
        }

        return throwError(()=> error)
      }),
      map((dailyForecast)=> dailyForecast.days[0].hours),
      shareReplay(1));
  }
}
