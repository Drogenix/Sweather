import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {WeatherApiService} from "../weather-api.service";

@Component({
  selector: 'app-home-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.css']
})
export class AppSearchComponent implements OnInit {
  constructor(private router: Router, private service: WeatherApiService) { }

  ngOnInit(): void {

  }

   searchButtonClicked(city: string) {
    this.service.city = city;
    var isGotResponse = this.service.sendTestResponse();
    if (isGotResponse)
    {
      this.router.navigate(['weather']);
    }

  }

}
