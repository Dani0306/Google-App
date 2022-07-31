import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchNews } from '../store/actions/resultsActions';
import NewsContainerItem from './NewsContainerItem';
import Loading from './Loading'

const NewsContainer = () => {

  const dispatch = useDispatch();
  const query = useSelector(state => state.results.query)
  const news = useSelector(state => state.results.news)
  const loading = useSelector(state => state.results.loading)

  useEffect(() => {
    dispatch(searchNews(query));
  }, [])


  if(loading) return <Loading />

  return (
    <div className='w-full pt-10 h-max overflow-y-scroll overflow-x-hidden flex flex-col items-center max-w-[700px] lg:ml-[110px] scrollbar-hide'>
        {
          news?.map((noticia, index) => {
            const { title, link, published }  = noticia;
            return <NewsContainerItem key={index} title={title} link={link} published={published}/>
          })
        }
    </div>
  )
}

export default NewsContainer