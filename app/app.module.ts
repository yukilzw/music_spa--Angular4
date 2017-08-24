import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';
import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './1-component';

import { MyService }  from './my-service';

const appRoutes: Routes = [
  { path: 'heroes', 
    component: FirstComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true,useHash: true } // <-- debugging purposes only 
    ),
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FirstComponent
  ],
  providers: [
    MyService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }