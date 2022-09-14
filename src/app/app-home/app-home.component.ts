import {Component, OnInit, DoCheck,} from '@angular/core';
import {ChildrenOutletContexts, Router} from "@angular/router";
import {WeatherApiService} from "../weather-api.service";
import {animate, group, keyframes, query, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css'],
  animations:[
      trigger('routeAnims', [
        transition('homePage<=>weatherPage', [
          style({ position: 'relative' }),
          query(':enter, :leave', [
            style({
              position: 'absolute',
              top: 0,
              left: 0,
              opacity:0,
              width: '100%'
            })
          ]),
          query(':leave', [
            style({opacity:1})
          ]),
          group([
            query(':leave', [
              animate('750ms ease-out', style({ opacity: 0 }))
            ]),
            query(':enter', [
              animate('1500ms',keyframes([
                style({opacity:0, offset:0.5}),
                style({opacity:1, offset:1})
                ])


              )
            ])
          ]),
        ]),


      ])

      ]
})
export class AppHomeComponent implements OnInit, DoCheck{

  isHomePage: boolean = false;
  status:string;
  constructor(private router: Router, private  service: WeatherApiService, private contexts: ChildrenOutletContexts) {

  }
  getRouteAnimationData()
  {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  ngOnInit(): void {

  }
  ngDoCheck():void
  {
    this.isHomePage = this.router.url == '/search';
  }

  sendRequest(city: string) {
    this.service.city = city;
    var isGotResponse = this.service.sendTestResponse();
    if (isGotResponse)
    {
      this.router.navigate(['weather']);
    }

  }

}
