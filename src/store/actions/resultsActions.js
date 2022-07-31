import { getImages, getNews, getResults } from '../../helpers/getResults'
import { setImages, setLoading, setNews, setVideosAction } from './resultsActionsCreators'

export const searchResults = (type, query) => async (dispatch) => {
    dispatch(setLoading(true))
    
    const videos = await getResults(type, query);

    if(videos){
        dispatch(setVideosAction(videos))
        dispatch(setLoading(false))
    }

}


export const searchImages = (query) => async (dispatch) => {
    dispatch(setLoading(true))

    const images = await getImages(query);

    if(images){
        dispatch(setImages(images));
        dispatch(setLoading(false))
    }
}


export const searchNews = (query) => async (dispatch) => {
    dispatch(setLoading(true))

    const news = await getNews(query)

    if(news){
        dispatch(setNews(news))
        dispatch(setLoading(false))
    }

}

