import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Dayweather} from "../data-models/dayweather";
import {catchError, Observable, retry, throwError} from "rxjs";
import {environment} from "../../environments/environment.prod";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  private _apiToken: string;

  _usedTokensCount:number = 0;

  city:string;

  constructor(private http:HttpClient) {

    this._usedTokensCount = 0;

    this.changeApiToken();
  }

  changeApiToken()
  {
    this._apiToken = JSON.stringify(environment.apiKeys[this._usedTokensCount].token);

    this._apiToken = this._apiToken.substring(1, this._apiToken.length-1)

    this._usedTokensCount = 1;
  }

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Возникла ошибка:', error.error);
    }
    else if(error.status === 429)
    {
      this.changeApiToken();

      console.error(
        `Ошибка на сервере: ${error.status}, тело ошибки: `, error.error);
    }

    return throwError(() =>
      new Error('Сервисы не доступны, попробуйте перезагрузить страницу или вернитесь позже.')
    );
  }

  getMonthInfo(): Observable<any>
  {
    const datePipe: DatePipe = new DatePipe('en-US')

    const now = new Date();

    const nowDateString = datePipe.transform(now, 'YYYY-MM-dd')

    const afterMonth = now.setMonth(now.getMonth()+1, now.getDate());

    const afterMonthDateString = datePipe.transform(afterMonth, 'YYYY-MM-dd')

      const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+this.city + '/' + nowDateString + '/' + afterMonthDateString +'?unitGroup=metric&include=days&key='+ this._apiToken +'&contentType=json';

      console.log(url);

      return this.http.get<Dayweather[]>(url).pipe(
        retry(5),
        catchError(error => this.handleError(error))
      );
  }
   getDailyInfo() : Observable<any>
  {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ this.city +'/today?unitGroup=metric&include=hours&key='+ this._apiToken +'&contentType=json';

    return this.http.get<Dayweather[]>(url).pipe(
      retry(5),
      catchError(error => this.handleError(error))
    );
  }
}
