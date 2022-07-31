import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom'
import GoogleSearch from './GoogleSearch'
import NewsContainer from './NewsContainer';
import SearchContainer from './SearchContainer';
import SectionsNavbar from './SectionsNavbar'
import ImagesContainer from './ImagesContainer'
import VideosContainer from './VideosContainer'
import Loading from './Loading'
import { useEffect } from 'react';
import { searchImages, searchResults } from '../store/actions/resultsActions';
import { setShowSearchBar } from '../store/actions/buttonsActions';

const ResultsContainer = () => {

  const dispatch = useDispatch();
  const { type } = useParams();
  
  const query = useSelector(state => state.results.query)
  const results = useSelector(state => state.results.results)
  const loading = useSelector(state => state.results.loading)

  const contentToRender = () => {
    switch(type){
      case "search": 
        return <SearchContainer  results={results}/>
      case "news": 
        return <NewsContainer />
      case "image": 
        return <ImagesContainer />
      case "video": 
        return <VideosContainer results={results}/>
      
    }
  }

  const handleShowSearchBar = () => {
    if(typeof(window) && window.innerWidth < 1280) dispatch(setShowSearchBar(true))
  }

  useEffect(() => {
    if(type !== 'image' && type !== 'news') dispatch(searchResults(type, query));
  }, [type])

  if(!loading && !query) return <Navigate to='/'/>


  return (
    <div className='w-full h-full flex items-center justify-start flex-col lg:items-start lg:px-10'>
        <div className='w-full items-center justify-center flex flex-col lg:flex-row mt-[-5%] lg:mt-[-50px] lg:w-[800px] lg:justify-start'>
          <img src="/google1.png" className='w-[100px] h-[100px] object-contain' alt="" />
          <GoogleSearch handleShowSearchBar={handleShowSearchBar}/> 
        </div>
        <SectionsNavbar />
        {contentToRender()}
    </div>
  )
}

export default ResultsContainer