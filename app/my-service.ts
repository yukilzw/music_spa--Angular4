import { Injectable } from '@angular/core';

@Injectable()
export class MyService {

  constructor(

    ) { }

  Param(obj: Object) {
    let arr : Array<any>;
    for(let k in obj){
        arr.push(k+'='+encodeURI(obj[k] instanceof Object ? JSON.stringify(obj[k]) : obj[k]));
    }
    return arr.join('&')
  }
}