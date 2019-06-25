import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';

import { AppComponent } from './app.component';
import { p_askDoctor } from './component/p-askDoctor';
import { p_deptList } from './component/p-deptList';
import { p_docList } from './component/p-docList';
import { p_docDetail } from './component/p-docDetail';

import { s_departList } from './component/s-departList';
import { s_alert } from './component/s-alert';

import { common } from './my-service';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'ng-app/p-askDoctor',
        pathMatch: 'full'
    },
    {
        path: 'ng-app/p-askDoctor',
        component: p_askDoctor,
        data: { state: '1' }
    },
    {
        path: 'ng-app/p-deptList',
        component: p_deptList,
        data: { state: '2' }
    },
    {
        path: 'ng-app/p-docList',
        component: p_docList,
        data: { state: '3' }
    },
    {
        path: 'ng-app/p-docDetail',
        component: p_docDetail,
        data: { state: '4' }
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true }),
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        StoreModule.forRoot(reducers, { metaReducers })
    ],
    declarations: [
        AppComponent,
        p_askDoctor,
        p_deptList,
        p_docList,
        p_docDetail,
        s_departList,
        s_alert,
    ],
    providers: [
        common
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
