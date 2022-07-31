import { headers, baseUrl } from './variables'
import axios from 'axios'

export const getResults = async (type, query) => {
    const response = await axios.get(`${baseUrl}/${type}/q=${query}&num=40`, { headers })
    
    if(response.data){

        let results;

        if(type === 'image') return [];
        
        if(type === 'news') return [];

        else results = response.data.results.map(result => {
            const { title, description, link, additionalLinks } = result;
            return { title, description, link, additionalLinks };
        })

        return results
    }

}

export const getImages = async (query) => {
    const response = await axios.get(`${baseUrl}/image/q=${query}&num=40`, { headers })

    if(response.data){
        const results = response.data.image_results.map(img => {
            const { image: { alt, src }, link: { href, title } } = img;
            return { src, alt, href, title };
        })

        return results

    }

}

export const getNews = async (query) => {
    const response = await axios.get(`${baseUrl}/news/q=${query}&num=40`, { headers })

    if(response.data){
        const results = response.data.entries.map(noticia => {
            const { title, link, published } = noticia;
            return { title, link, published };
        })

        return results

    }
}

