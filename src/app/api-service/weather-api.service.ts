import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Dayweather} from "../data-models/dayweather";
import {catchError, Observable, retry, throwError} from "rxjs";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private _apiKey: string;

  private _usedTokensCount:number;

  city:string;

  constructor(private http:HttpClient) {


    this._usedTokensCount = 1;

    this.setApiToken();
  }

  private setApiToken()
  {
    this._apiKey = JSON.stringify(environment.apiKeys[this._usedTokensCount].token);

    this._apiKey = this._apiKey.substring(1, this._apiKey.length-1)

    this._usedTokensCount += 1;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {

      console.error('Возникла ошибка:', error.error);
    } else {

      console.error(
        `Ошибка на сервере: ${error.status}, тело ошибки: `, error.error);
    }

    return throwError(() => new Error('Сервисы не доступны, попробуйте перезагрузить страницу или вернитесь позже.'));
  }

  getMonthInfo(): Observable<any>
  {
      const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+this.city+'/2022-07-28/2022-08-28?unitGroup=metric&include=days&key='+ this._apiKey +'&contentType=json';

      return this.http.get<Dayweather[]>(url).pipe(
        retry(10),
        catchError(this.handleError)
      );
  }
   getDailyInfo() : Observable<any>
  {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ this.city +'/today?unitGroup=metric&include=hours&key='+ this._apiKey +'&contentType=json';

    return this.http.get<Dayweather[]>(url).pipe(
      retry(10),
      catchError(this.handleError)
    );
  }
}
