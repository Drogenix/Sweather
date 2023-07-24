import {Component, OnDestroy, OnInit,} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {animate, group, keyframes, query, style, transition, trigger} from "@angular/animations";
import {filter, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],
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
export class RootComponent implements OnInit, OnDestroy{

  isNotHomePage: boolean = false;

  private destroy$ = new Subject<void>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.isNotHomePage = this.router.url != '/';
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
