import { createAction } from '../actions/createAction'
import { RESULTS_TYPES } from '../types/resultsTypes'

export const setVideosAction = (videos) => createAction(RESULTS_TYPES.SET_RESULTS, videos)

export const setQuery = (query) => createAction(RESULTS_TYPES.SET_QUERY, query)

export const setLoading = (boolean) => createAction(RESULTS_TYPES.SET_LOADING, boolean)

export const setImages = (images) => createAction(RESULTS_TYPES.SET_IMAGES, images)

export const setNews = (news) => createAction(RESULTS_TYPES.SET_NEWS, news)