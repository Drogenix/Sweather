import {Component, Input} from '@angular/core';
import {Dayweather} from "../../data-models/dayweather";

@Component({
  selector: 'app-month-detailed',
  templateUrl: './app-month-detailed.component.html',
  styleUrls: ['./app-month-detailed.component.css'],
})

export class AppMonthDetailedComponent {

  isButClicked:boolean;

  @Input()details: Dayweather;

  constructor()
  {
    this.isButClicked = false;
  }

  buttonClicked()
  {
    this.isButClicked = !this.isButClicked;
  }
}
