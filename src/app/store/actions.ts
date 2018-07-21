import { Action } from '@ngrx/store';

export class pageGo implements Action {
    readonly type = 'left';
}

export class pageBack implements Action {
    readonly type = 'right';
}

export class alertShow implements Action {
    readonly type = "show";
}

export class alertHide implements Action {
    readonly type = 'hide';
}