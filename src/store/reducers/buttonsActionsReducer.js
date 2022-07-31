import { BUTTON_TYPES } from "../types/resultsTypes";


const INITIAL_STATE = {
    showSearchBar: false
}


export const buttonsReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action


    switch(type){
        case BUTTON_TYPES.SET_SHOW_SEARCH_BAR: 
            return { ...state, showSearchBar: payload }
        default: 
            return state;
    }

}