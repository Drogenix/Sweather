import {Component, DoCheck,} from '@angular/core';
import {ChildrenOutletContexts, NavigationError, Router} from "@angular/router";
import {animate, group, keyframes, query, style, transition, trigger} from "@angular/animations";
import {WeatherApiService} from "../api-service/weather-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css'],
  animations:[
      trigger('routeAnims', [
        transition('*<=>*', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              opacity:0,
              width: '100%'
            })
          ],{optional:true}),
          query(':leave', [
            style({opacity:1})
          ],{optional:true}),
          group([
            query(':leave', [
              animate('750ms ease-out', style({ opacity: 0 }))
            ],{optional:true}),
            query(':enter', [
              animate('1500ms',keyframes([
                style({opacity:0, offset:0.5}),
                style({opacity:1, offset:1})
                ])


              )
            ],{optional:true})
          ]),
        ]),


      ])

      ]
})
export class AppHomeComponent implements DoCheck{

  isHomePage: boolean = false;

  status:string;

  constructor(private router: Router, private weatherApi: WeatherApiService, private contexts: ChildrenOutletContexts) {
    this.router.events.subscribe((event)=>
    {
      if(event instanceof NavigationError)
      {
        window.alert('Ошибка! Нажмите на кнопку поиска ещё раз(может понадобиться несколько ввиду специфики работы сервисов.')
      }
    })
  }
  getRouteAnimationData()
  {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  ngDoCheck():void
  {
    this.isHomePage = this.router.url == '/search';
  }

  searchButtonClicked(city:string)
  {
    this.weatherApi.city = city;

    this.router.navigate(['/weather']);
  }
}
