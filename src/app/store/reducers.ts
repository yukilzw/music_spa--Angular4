import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment'

export interface ArticleState {
    direction ? : any;
    routecss ? :any;
    alertShow ? : any;
} 

export function routecss (state:ArticleState = {direction:"right"}, action):ArticleState {
    switch (action.type) {
        case 'left':
            return {direction:"left"}
        case 'right':
            return {direction:"right"}
        default :
            return state
    }
}

export function alertShow (state:ArticleState = new Object(), action):ArticleState {
    state.alertShow = false;
    switch (action.type) {
        case "show":
            return {alertShow:true}
        case "hide":
            return {alertShow:false}
        default :
            return state
    }
}

/*const getArticleState = createFeatureSelector<ArticleState>('routecss')

export const getArticles = createSelector(
    getArticleState, 
    (state: ArticleState) => state.direction
); */

export const reducers: ActionReducerMap<ArticleState> = {
    routecss,
    alertShow
};

const logger = (reducer: ActionReducer<ArticleState>): ActionReducer<ArticleState> => {
    return function(state: ArticleState, action: any): ArticleState {
        /*console.log('state', state);
        console.log('action', action);*/
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<ArticleState>[] = !environment.production ? [logger] : []; 