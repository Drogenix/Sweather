import {Component, Input} from '@angular/core';
import {Forecast} from "../../core/entities/forecast";

@Component({
  selector: 'app-month-forecast',
  templateUrl: './month-forecast.component.html',
  styleUrls: ['./month-forecast.component.css']
})
export class MonthForecastComponent {

  @Input() monthForecast: Forecast[];

  @Input()city:string = '';

}
