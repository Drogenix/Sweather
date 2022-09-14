import {Component, OnInit} from '@angular/core';
import {dayWeather} from "../data-models/dayweather";
import {WeatherApiService} from "../weather-api.service";

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {

  city: string = '';

  // Weather info for a month.
  monthWeather: dayWeather[] = [];

  weekendWeather: dayWeather[] = [];

  // Detailed info about this day.
  dailyWeather: dayWeather[] = [];

  constructor(private service: WeatherApiService) {
  }

  ngOnInit(): void
  {
    this.service.getDailyInfo().subscribe(response => {

      var jsonObj = response.body;

      this.dailyWeather = jsonObj.days[0].hours;

      for (let item of this.dailyWeather) {
        switch (item.conditions) {
          case 'Rain':
            item.icon = "https://www.wunderground.com/static/i/c/v4/6.svg";
            break;
          case 'Sunny':
            item.icon = "https://www.wunderground.com/static/i/c/v4/32.svg";
            break;
          case 'Partially cloudy':
            item.icon = "https://www.wunderground.com/static/i/c/v4/20.svg";
            break;
          case 'Rain, Partially cloudy':
            item.icon = "https://www.wunderground.com/static/i/c/v4/9.svg";
            break;
          case 'Clear':
            item.icon = "https://www.wunderground.com/static/i/c/v4/32.svg";
            break;
          case 'Overcast':
            item.icon = "https://www.wunderground.com/static/i/c/v4/26.svg";
            break;
          case 'Rain, Overcast':
            item.icon = "https://www.wunderground.com/static/i/c/v4/39.svg";
            break;
          case 'Snow':
            item.icon = "https://www.wunderground.com/static/i/c/v4/13.svg";
            break;
          case 'Snow, Overcast':
            item.icon = "https://www.wunderground.com/static/i/c/v4/41.svg";
            break;
          case 'Snow, Rain, Overcast':
            item.icon = "https://www.wunderground.com/static/i/c/v4/5.svg";
            break;
          case 'Snow, Rain, Partially cloudy':
            item.icon = "https://www.wunderground.com/static/i/c/v4/5.svg";
            break;
        }
      }
    });

    this.service.getMonthInfo().subscribe(response => {

      var jsonObj = response.body;

      this.monthWeather = jsonObj.days;

      this.city = jsonObj.resolvedAddress;

      for (let item of this.monthWeather) {
        switch (item.conditions) {
          case 'Rain':
            item.icon = "https://www.wunderground.com/static/i/c/v4/6.svg";
            break;
          case 'Sunny':
            item.icon = "https://www.wunderground.com/static/i/c/v4/32.svg";
            break;
          case 'Partially cloudy':
            item.icon = "https://www.wunderground.com/static/i/c/v4/20.svg";
            break;
          case 'Rain, Partially cloudy':
            item.icon = "https://www.wunderground.com/static/i/c/v4/9.svg";
            break;
          case 'Clear':
            item.icon = "https://www.wunderground.com/static/i/c/v4/32.svg";
            break;
          case 'Overcast':
            item.icon = "https://www.wunderground.com/static/i/c/v4/26.svg";
            break;
          case 'Rain, Overcast':
            item.icon = "https://www.wunderground.com/static/i/c/v4/39.svg";
            break;
          case 'Snow':
            item.icon = "https://www.wunderground.com/static/i/c/v4/13.svg";
            break;
          case 'Snow, Overcast':
            item.icon = "https://www.wunderground.com/static/i/c/v4/41.svg";
            break;
          case 'Snow, Rain, Overcast':
            item.icon = "https://www.wunderground.com/static/i/c/v4/5.svg";
            break;
          case 'Snow, Rain, Partially cloudy':
            item.icon = "https://www.wunderground.com/static/i/c/v4/5.svg";
            break;
        }
      }

      this.weekendWeather = this.monthWeather.slice(0, 7);
    });



  }

}
