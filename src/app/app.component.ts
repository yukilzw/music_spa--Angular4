import { Component,HostBinding, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition, keyframes,query,group } from '@angular/animations'
import { Store,select } from '@ngrx/store';
import { ArticleState/*,getArticles*/ } from './store/reducers'

const routerTransition = trigger('routerTransition', [
    transition('* => left', [
        query(':enter, :leave', style({ position: 'fixed', width:'100%' })
            , { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(100%)' ,zIndex:5 }),
                animate('.3s ease', style({ transform: 'translateX(0)' })),
            ], { optional: true }),
            query(':enter', [
                style({ opacity:0 }),
                animate('.3s cubic-bezier(.55,.16,.75,.73)', style({ opacity:1 }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0)',opacity:1,zIndex:3 }),
                animate('.3s ease', style({ transform: 'translateX(-50%)',opacity:0 }))
            ], { optional: true }),
        ])
    ]),
    transition('* => *', [
        query(':enter, :leave', style({ position: 'fixed', width:'100%' })
            , { optional: true }),
        group([
            query(':enter', [
                style({ transform: 'translateX(-50%)' ,zIndex:3 }),
                animate('.3s ease', style({ transform: 'translateX(0)' })),
            ], { optional: true }),
            query(':enter', [
                style({ opacity:0 }),
                animate('.3s cubic-bezier(.55,.16,.75,.73)', style({ opacity:1 }))
            ], { optional: true }),
            query(':leave', [
                style({ transform: 'translateX(0)',opacity:1,zIndex:5 }),
                animate('.3s ease', style({ transform: 'translateX(100%)',opacity:0 }))
            ], { optional: true }),
        ])
    ])
])

@Component({
    selector: 'app-root', 
    styles:[],
    animations: [
        routerTransition
    ],
    template: ` 
        <main [@routerTransition]="getStates(o)">
            <router-outlet  #o="outlet"></router-outlet>
        </main>
    `
})
export class AppComponent{
    animateStart:boolean = false
    routeDirection:string
    constructor(private store: Store<ArticleState>){
        store.select("routecss").subscribe((state)=>{
            this.routeDirection = state.direction
        })
    }
    ngAfterViewInit(){
        setTimeout(()=>this.animateStart = true,0)
    }
    getStates(out:any) {
        if(!this.animateStart){
            return false
        }
        if(this.routeDirection=="left"){
            return this.routeDirection
        }else{
            return out.activatedRouteData.state;
        }
    }
}