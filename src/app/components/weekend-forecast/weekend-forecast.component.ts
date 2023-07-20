import {Component, Input} from '@angular/core';
import {Forecast} from "../../core/entities/forecast";

@Component({
  selector: 'app-weekend-forecast',
  templateUrl: './weekend-forecast.component.html',
  styleUrls: ['./weekend-forecast.component.css']
})
export class WeekendForecastComponent {
  @Input() weekendForecast: Forecast[] = [];

  constructor() { }

}
