import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {dayWeather} from "./data-models/dayweather";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {

  city: string = 'London'; // As default value

  monthWeather: dayWeather[] = [];

  dailyWeather: dayWeather[] = [];

  constructor(private http:HttpClient) {
  }

  sendTestResponse():boolean
{
  var isGotResponse= true;

  // Create url string
  const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+this.city+'/2022-07-28/2022-08-28?unitGroup=metric&include=days&key=TRW64L2E4CEWXA9CZ9CHJ8KPE&contentType=json';

  this.http.get(url, {observe: 'response'}).pipe(
    retry(3),
    catchError(this.handleError)
  ).subscribe(response =>
  {

  })
  return  isGotResponse;
}

  getMonthInfo(): Observable<any>
  {
      // Create url string
      const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+this.city+'/2022-07-28/2022-08-28?unitGroup=metric&include=days&key=TRW64L2E4CEWXA9CZ9CHJ8KPE&contentType=json';
      // Send request to weather API
      return this.http.get<dayWeather[]>(url, {observe: 'response'});
  }
   getDailyInfo() : Observable<any>
  {
    const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ this.city +'/today?unitGroup=metric&include=hours&key=TRW64L2E4CEWXA9CZ9CHJ8KPE&contentType=json';

    return this.http.get<dayWeather[]>(url, {observe: 'response'});
  }

  private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      // Return an observable with a user-facing error message.
      return throwError(() => new Error('Something bad happened; please try again later.'));
    }


}
