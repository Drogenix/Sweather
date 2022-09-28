import { Component} from '@angular/core';
import {WeatherApiService} from "../api-service/weather-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent{
  constructor(private weatherApi:WeatherApiService, private router: Router) { }

  searchButtonClicked(city:string)
  {
    this.weatherApi.city = city;

    this.router.navigate(['/weather']);
  }
}
