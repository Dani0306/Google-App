import { createAction } from '../actions/createAction'
import { BUTTON_TYPES } from "../types/resultsTypes";

export const setShowSearchBar = (boolean) => createAction(BUTTON_TYPES.SET_SHOW_SEARCH_BAR, boolean)
