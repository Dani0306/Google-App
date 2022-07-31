import { combineReducers } from 'redux'
import { buttonsReducer } from './buttonsActionsReducer'
import { resultsReducer } from './resultsReducer'

export const rootReducer = combineReducers({
    results: resultsReducer, 
    buttons: buttonsReducer
})