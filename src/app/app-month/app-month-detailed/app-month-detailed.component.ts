import {Component, Input, OnInit} from '@angular/core';
import {dayWeather} from "../../data-models/dayweather";
import {animate, animateChild, group, keyframes, query, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-month-detailed',
  templateUrl: './app-month-detailed.component.html',
  styleUrls: ['./app-month-detailed.component.css'],
})

export class AppMonthDetailedComponent implements OnInit {

  isButClicked:boolean = false;
  @Input()details: dayWeather;
  constructor() { }

  ngOnInit(): void {

  }

  buttonClicked()
  {
    if(this.isButClicked)
    {
      this.isButClicked = false;
    }
    else
    {
      this.isButClicked = true;

    }
  }
}
