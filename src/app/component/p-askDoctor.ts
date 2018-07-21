import { Component } from '@angular/core';
import { Router } from '@angular/router'
import {trigger, state, style, animate, transition, keyframes,query,group } from '@angular/animations'
import * as IScroll from 'iscroll';
import { Store,select } from '@ngrx/store';
import { ArticleState } from '../store/reducers'

import { common,shadeAnimations } from '../my-service'

@Component({
  selector: 'p-askDoctor', 
  templateUrl: '../template/p-askDoctor.html',
  styleUrls: ['../style/p-askDoctor.css'],
  animations:[...shadeAnimations]
})
export class p_askDoctor{
    scroll : IScroll
    scroll_option = {click:true,preventDefault:true} as IScroll.IScrollOptions
    isAlertShow:boolean
    bannerSrc:any = require("../../assets/img/banner-1.png")
    deptData:Array<Object> = [
        { name:"肿瘤科",src:require("../../assets/img/dept-1.png")},
        { name:"传染科",src:require("../../assets/img/dept-2.png")},
        { name:"内科",src:require("../../assets/img/dept-3.png")},
        { name:"外科",src:require("../../assets/img/dept-4.png")},
        { name:"妇产科",src:require("../../assets/img/dept-5.png")},
        { name:"介入科",src:require("../../assets/img/dept-6.png")},
        { name:"口腔科",src:require("../../assets/img/dept-7.png")},
        { name:"更多",src:require("../../assets/img/dept-8.png")},
    ]
    docName : string =""
    constructor(private router:Router,private common:common,private store: Store<ArticleState>){
        document.title="在线问诊"
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
        this.scroll = new IScroll("p-askDoctor .scroll-wrapper",this.scroll_option)
        this.scrollRefresh()
    }
    toDocList(){
        this.common.pageNext()
        this.router.navigateByUrl('ng-app/p-docList');
    }
    toDeptList(){
        this.common.pageNext()
        this.router.navigateByUrl('ng-app/p-deptList');
    }
    searchDoc(){
        if(this.docName.replace(/\s+/ig,"")){
            this.toDocList()
        }else{
            this.common.alertShow()
        }
    }
    toDocDetail(){
        this.common.pageNext()
        this.router.navigateByUrl('ng-app/p-docDetail');
    }
}