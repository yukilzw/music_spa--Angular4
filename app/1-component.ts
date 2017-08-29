import { Component } from '@angular/core';

import '../css/style.css';
 
@Component({
  selector: 'app-1', 
  templateUrl: './1-component.html',
  styleUrls: ['./1-component.css']
})
export class Component_1 {
    constructor(){
      let a : Set<number> = new Set([1121,5,5,4])
      console.log(a)
    }
 } 