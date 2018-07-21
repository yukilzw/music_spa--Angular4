import { Component } from '@angular/core';
import { Router } from '@angular/router'

import { common } from '../my-service'

@Component({
  selector: 'p-deptList', 
  templateUrl: '../template/p-deptList.html',
  styleUrls: ['../style/p-deptList.css'],
})
export class p_deptList{
    constructor(private router:Router,private common:common){
        document.title="选择科室"
    }
 }