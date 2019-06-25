import { Injectable } from '@angular/core';
import { Element } from '@angular/compiler';
import {trigger, state, style, animate, transition, keyframes, query, group } from '@angular/animations';
import { environment } from '../environments/environment';
import { Store, select } from '@ngrx/store';
import { ArticleState } from './store/reducers';
import { pageBack, pageGo, alertHide, alertShow } from './store/actions';

@Injectable()
export class common {
    constructor(private store: Store<ArticleState>) {
        document.documentElement.style.fontSize = environment.REM + 'px';
    }
    pageNext() {
        this.store.dispatch(new pageGo());
        setTimeout(() => this.store.dispatch(new pageBack()), 300);
    }
    alertShow() {
        this.store.dispatch(new alertShow());
    }
    alertHide() {
        this.store.dispatch(new alertHide());
    }
    param(obj: Object) {
        const arr: Array<any> = [];
        for (const k in obj) {
            arr.push(k + '=' + encodeURI(obj[k] instanceof Object ? JSON.stringify(obj[k]) : obj[k]));
        }
        return arr.join('&');
    }
    parse(string: string): Object {
        const obj = new Object();
        let strs;
        const arr = decodeURIComponent(string).split('#');
        for (let i = 0; i < arr.length; i++) {
            let line = arr[i];
            if (line.indexOf('?') !== -1) {
                line = line.substr(line.indexOf('?') + 1);
                strs = line.split('&');
                for (let i = 0; i < strs.length; i++) {
                    const tempArr = strs[i].split('=');
                    obj[tempArr[0]] = tempArr[1];
                }
            }
        }
        return obj;
    }
    loading() {
        let shadowBox: HTMLCollectionOf<any> | HTMLElement = document.getElementsByClassName('showbox');
        const body = document.getElementsByTagName('body');
        if (shadowBox.length) {
            return;
        }
        shadowBox = document.createElement('div');
        shadowBox.className = 'showbox';
        // tslint:disable-next-line
        shadowBox.innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg>'
        body[0].appendChild(shadowBox);
    }
    loadingRemove() {
        const shadowBox: HTMLCollectionOf<any> = document.getElementsByClassName('showbox');
        const body = document.getElementsByTagName('body');
        body[0].removeChild(shadowBox[0]);
    }
}

export const shadeAnimations = [
    trigger('alert', [
        transition('void => *', [
            group([
                query('#alert-shade', [
                    style({'background-color': 'rgba(0,0,0,0)'}),
                    animate(230)
                ]),
                query('#alert', [
                    style({'transform': 'scale(.8)'}),
                    animate(300, keyframes([
                        style({'transform': 'scale(1.1)', offset: .6}),
                        style({'transform': 'scale(1)', offset: 1})
                    ]))
                ])
            ])
        ]),
        transition('* => void', animate(160, style({opacity: 0})) ),
    ])
];
