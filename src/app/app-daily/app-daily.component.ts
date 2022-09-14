import {Component, Input, OnInit} from '@angular/core';
import {dayWeather} from "../data-models/dayweather";

@Component({
  selector: 'app-daily',
  templateUrl: './app-daily.component.html',
  styleUrls: ['./app-daily.component.css']
})
export class AppDailyComponent implements OnInit {

  @Input()dailyWeather: dayWeather[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
