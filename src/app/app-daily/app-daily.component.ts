import {Component, Input} from '@angular/core';
import {Dayweather} from "../data-models/dayweather";

@Component({
  selector: 'app-daily',
  templateUrl: './app-daily.component.html',
  styleUrls: ['./app-daily.component.css']
})
export class AppDailyComponent{

  @Input()dailyWeather: Dayweather[] = [];

  constructor()
  {

  }

}
