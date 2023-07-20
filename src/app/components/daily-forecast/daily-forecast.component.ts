import {Component, Input} from '@angular/core';
import {Forecast} from "../../core/entities/forecast";

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.css']
})
export class DailyForecastComponent {
  @Input()dailyForecast: Forecast[];

}
