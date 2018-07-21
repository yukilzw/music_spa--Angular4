import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {trigger, state, style, animate, transition, keyframes,query,group } from '@angular/animations'
import * as IScroll from 'iscroll';
import { Store,select } from '@ngrx/store';
import { ArticleState } from '../store/reducers'

import { common,shadeAnimations } from '../my-service'

@Component({
  selector: 'p-docDetail', 
  templateUrl: '../template/p-docDetail.html',
  styleUrls: ['../style/p-docDetail.css'],
  animations:[...shadeAnimations]
})
export class p_docDetail{
    scroll : IScroll
    scroll_option = {click:true,preventDefault:true} as IScroll.IScrollOptions
    isAttention:boolean = true
    isAlertShow:boolean
    constructor(private router:Router,private common:common,private store: Store<ArticleState>){
        document.title="医生详情"
        store.select("alertShow").subscribe((state)=>{
            this.isAlertShow = state.alertShow
        })
    }
    scrollRefresh(){
        setTimeout(()=>{
            this.scroll && this.scroll.refresh()
        },130)
    }
    ngAfterViewInit(){
        this.scroll = new IScroll("p-docDetail .scroll-wrapper",this.scroll_option)
        this.scrollRefresh()
    }
    alertShade(){
        this.common.alertShow()
    }
}