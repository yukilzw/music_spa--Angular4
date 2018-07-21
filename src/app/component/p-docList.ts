import { Component,ElementRef,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {trigger, state, style, animate, transition, keyframes,query,group } from '@angular/animations'
import * as IScroll from 'iscroll';

import { common } from '../my-service'

@Component({
  selector: 'p-docList', 
  templateUrl: '../template/p-docList.html',
  styleUrls: ['../style/p-docList.css'],
  animations:[
    trigger('shade', [
        transition('void=>*',[
            style({transform:'translate3d(0,-100%,0)'}),
            animate('.5s ease', style({transform:'translate3d(0,0,0)'}))
        ]),
        transition('*=>void',[
            style({opacity:1}),
            animate(200, style({opacity:0}))
        ]),
    ])
  ]
})
export class p_docList{
    scroll : IScroll
    scroll_option = {click:true,preventDefault:true} as IScroll.IScrollOptions
    animate : Object = {shade:'out'}
    shadeShow:boolean = false
    docServe:boolean = true
    getSearchInput:boolean = false
    searchText:string = ""
    @ViewChild("docInput") docInput:ElementRef
    deptData:Array<Object> = [2,3,5,67,7,8,342,5,7,7]
    constructor(private router:Router,private common:common){
        document.title="选择医生"
    }
    scrollRefresh(){
        setTimeout(()=>{
            this.scroll && this.scroll.refresh()
        },130)
    }
    ngAfterViewInit(){
        this.scroll = new IScroll("p-docList .wrapper-1",this.scroll_option)
        this.scrollRefresh()
    }
    showDeptList(){
        this.shadeShow = !this.shadeShow
    }
    changeDocServe(){
        this.docServe = !this.docServe
    }
    getSearch(){
        this.shadeShow = false
        this.getSearchInput = true
        setTimeout(()=>{
            this.docInput.nativeElement.focus()
        },250)
    }
    hideSearch(e){
        this.searchText = ""
        this.getSearchInput = false
        e.stopPropagation()
    }
    searchDoc(){
        console.log(this.searchText)
    }
    toDocDetail(){
        this.common.pageNext()
        this.router.navigateByUrl('ng-app/p-docDetail');
    }
 }