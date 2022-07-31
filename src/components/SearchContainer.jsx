import { useSelector } from "react-redux";
import SeachContainerItem from "./SeachContainerItem"
import Loading from './Loading'


const SearchContainer = ({ results }) => {

  const loading = useSelector(state => state.results.loading)

  if(loading) return <Loading />

  return (
    <div className='w-full h-max overflow-y-scroll flex flex-col items-center overflow-x-hidden lg:ml-[110px] max-w-[700px] scrollbar-hide'>
      {
        results?.map((item, index) => {
          const { title, description, link } = item;
          return <SeachContainerItem key={index} title={title} description={description} link={link}/>
        })
      }
    </div>
  )
}

export default SearchContainer