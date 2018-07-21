import { Component,Input } from '@angular/core';
import { Router } from '@angular/router'

import { common } from '../my-service'

@Component({
  selector: 's-alert', 
  templateUrl: '../template/s-alert.html',
  styleUrls: ['../style/s-alert.css'],
})
export class s_alert{
    @Input() title:string
    @Input() types:string
    @Input() pContent:string
    @Input() docChoose:boolean
    isAgree:boolean = true
    constructor(private router:Router,private common:common){
        
    }
    yes(){
        this.common.alertHide()
    }
    no(){
        this.common.alertHide()
    }
    agreement(){
        this.isAgree = !this.isAgree
    }
}