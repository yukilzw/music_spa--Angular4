import { Component,HostBinding, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition, keyframes,query,group } from '@angular/animations'
const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'fixed', width:'100%' })
      , { optional: true }),
    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' ,opacity:0 }),
        animate('.5s ease-in-out', style({ transform: 'translateX(0)',opacity:1 }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0)',opacity:1 }),
        animate('.5s ease-in-out', style({ transform: 'translateX(-100%)',opacity:0 }))
      ], { optional: true }),
    ])
  ])
])
@Component({
  selector: 'myapp', 
  styles:[`:host { width: 100%; }`],
  animations: [
    routerTransition
  ],
  template: `
  <nav>
    <a routerLink="/1">1111</a>
    <a routerLink="/2">2222</a>
  </nav>
  <main [@routerTransition]="getStates(o)">
    <router-outlet  #o="outlet"></router-outlet>
  </main>
          `
})
export class AppComponent{ 
  getStates(out:any) {
    return out.activatedRouteData.state;
  }
}