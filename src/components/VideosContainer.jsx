import VideosContainerItem from "./videosContainerItem";
import Loading from './Loading'
import { useSelector } from 'react-redux'

const VideosContainer = ({ results }) => {

  const loading = useSelector(state => state.results.loading)

  if(loading) return <Loading />

  return (
    <div className='w-full h-max flex flex-col items-center overflow-y-scroll pt-6 max-w-[700px] scrollbar-hide lg:ml-[110px]'>
      {
        results.filter(res => res.link.includes('www.youtube.com')).filter(res => res.link.includes('watch')).map((video, index) => {
          const { title, link, description } = video;
          return <VideosContainerItem key={index} title={title} link={link} description={description}/>
        })
      }
    </div>
  )
}

export default VideosContainer