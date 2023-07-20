import {Component, Input} from '@angular/core';
import {Forecast} from "../../core/entities/forecast";

@Component({
  selector: 'app-month-forecast-day-details',
  templateUrl: './month-forecast-day-details.component.html',
  styleUrls: ['./month-forecast-day-details.component.css'],
})

export class MonthForecastDayDetailsComponent {

  isButClicked:boolean;

  @Input()forecast: Forecast;

  constructor()
  {
    this.isButClicked = false;
  }

  buttonClicked()
  {
    this.isButClicked = !this.isButClicked;
  }
}
