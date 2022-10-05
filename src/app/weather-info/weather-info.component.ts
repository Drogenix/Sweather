import {Component, OnInit} from '@angular/core';
import {Dayweather} from "../data-models/dayweather";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {

  city: string = '';

  // Weather info for a month.
  monthWeather: Dayweather[] = [];

  weekendWeather: Dayweather[] = [];

  // Detailed info about this day.
  dailyWeather: Dayweather[] = [];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void
  {
    this.route.data.subscribe(({dailyInfo}) => {

      const jsonObj = dailyInfo.days[0];

      this.dailyWeather = jsonObj.hours;

      for (let item of this.dailyWeather) {
        switch (item.conditions) {
          case 'Rain':
            item.icon = "assets/icons/white/svg/rain.svg";
            break;
          case 'Sunny':
            item.icon = "assets/icons/white/svg/sunny.svg";
            break;
          case 'Partially cloudy':
            item.icon = "assets/icons/white/svg/partlycloudy.svg";
            break;
          case 'Rain, Partially cloudy':
            item.icon = "assets/icons/white/svg/chancerain.svg";
            break;
          case 'Clear':
            item.icon = "assets/icons/white/svg/clear.svg";
            break;
          case 'Overcast':
            item.icon = "assets/icons/white/svg/cloudy.svg";
            break;
          case 'Rain, Overcast':
            item.icon = "assets/icons/white/svg/chancerain.svg";
            break;
          case 'Snow':
            item.icon = "assets/icons/white/svg/snow.svg";
            break;
          case 'Snow, Overcast':
            item.icon = "assets/icons/white/svg/snow.svg";
            break;
          case 'Snow, Rain, Overcast':
            item.icon = "assets/icons/white/svg/sleet.svg";
            break;
          case 'Snow, Rain, Partially cloudy':
            item.icon = "assets/icons/white/svg/chancesnow.svg";
            break;
        }
      }
    });

    this.route.data.subscribe(({monthlyInfo}) => {

      const jsonObj = monthlyInfo;

      this.monthWeather = jsonObj.days;

      this.city = jsonObj.resolvedAddress;

      for (let item of this.monthWeather) {
        switch (item.conditions) {
          case 'Rain':
            item.icon = "assets/icons/white/svg/rain.svg";
            break;
          case 'Sunny':
            item.icon = "assets/icons/white/svg/sunny.svg";
            break;
          case 'Partially cloudy':
            item.icon = "assets/icons/white/svg/partlycloudy.svg";
            break;
          case 'Rain, Partially cloudy':
            item.icon = "assets/icons/white/svg/chancerain.svg";
            break;
          case 'Clear':
            item.icon = "assets/icons/white/svg/clear.svg";
            break;
          case 'Overcast':
            item.icon = "assets/icons/white/svg/cloudy.svg";
            break;
          case 'Rain, Overcast':
            item.icon = "assets/icons/white/svg/chancerain.svg";
            break;
          case 'Snow':
            item.icon = "assets/icons/white/svg/snow.svg";
            break;
          case 'Snow, Overcast':
            item.icon = "assets/icons/white/svg/snow.svg";
            break;
          case 'Snow, Rain, Overcast':
            item.icon = "assets/icons/white/svg/sleet.svg";
            break;
          case 'Snow, Rain, Partially cloudy':
            item.icon = "assets/icons/white/svg/chancesnow.svg";
            break;
        }
      }
      this.weekendWeather = this.monthWeather.slice(0, 7);
    });
  }

}
