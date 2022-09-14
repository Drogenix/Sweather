import {Component, Input, OnInit} from '@angular/core';
import {dayWeather} from "../data-models/dayweather";

@Component({
  selector: 'app-month',
  templateUrl: './app-month.component.html',
  styleUrls: ['./app-month.component.css']
})
export class AppMonthComponent implements OnInit {

  @Input()monthWeather: dayWeather[] = [];

  @Input()city:string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
