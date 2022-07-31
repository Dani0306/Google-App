import { RESULTS_TYPES } from '../types/resultsTypes'

const INITIAL_STATE = {
    query: '', 
    results: [], 
    loading: false, 
    images: [], 
    news: []
}


export const resultsReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type){
        case RESULTS_TYPES.SET_QUERY: 
            return { ...state, query: payload }
        case RESULTS_TYPES.SET_RESULTS: 
            return { ...state, results: payload }
        case RESULTS_TYPES.SET_LOADING: 
            return { ...state, loading: payload }
        case RESULTS_TYPES.SET_IMAGES: 
            return { ...state, images: payload }
        case RESULTS_TYPES.SET_NEWS: 
            return { ...state, news: payload }
        default: 
            return state;
    }

}