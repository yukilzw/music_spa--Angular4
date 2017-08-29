import { BrowserModule }       from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FormsModule }         from '@angular/forms';
import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Component_1 } from './1-component';
import { Component_2 } from './2-component';

import { MyService }  from './my-service';

const appRoutes: Routes = [
  { path: '', redirectTo: '1',pathMatch: 'full'},
  { path: '1', 
    component: Component_1,
    data: { state: '1' }
  },
  { path: '2', 
    component: Component_2,
    data: { state: '2' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,useHash: true } // <-- debugging purposes only 
    ),
    BrowserModule,
    BrowserAnimationsModule,
    //FormsModule
  ],
  declarations: [
    AppComponent,
    Component_1,
    Component_2
  ],
  providers: [
    MyService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }