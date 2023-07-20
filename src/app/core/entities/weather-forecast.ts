import {Forecast} from "./forecast";

export interface WeatherForecast{
  days:Forecast[];

  resolvedAddress:string;
}
