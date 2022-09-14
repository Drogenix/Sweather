import {Component, Input, OnInit} from '@angular/core';
import {dayWeather} from "../data-models/dayweather";

@Component({
  selector: 'app-weekend',
  templateUrl: './app-weekend.component.html',
  styleUrls: ['./app-weekend.component.css']
})
export class AppWeekendComponent implements OnInit {

  @Input() weekendWeather: dayWeather[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
