import { Component } from '@angular/core';

@Component({
  selector: 'my-app', 
  template: `<a routerLink="/1">Start</a> 
             <a routerLink="/2">some</a> 
              <router-outlet></router-outlet>`
})
export class AppComponent { }