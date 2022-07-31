import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchImages } from '../store/actions/resultsActions';
import ImageContainerItem from './ImageContainerItem';
import Loading from './Loading';

const ImagesContainer = () => {

  const query = useSelector(state => state.results.query)
  const images = useSelector(state => state.results.images)
  const loading = useSelector(state => state.results.loading)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(searchImages(query))
  }, [])

  if(loading) return <Loading />

  return (
    <div className='w-full overflow-y-scroll h-max place-items-center grid grid-cols-2 gap-x-4 gap-y-6 px-4 pt-10 md:grid-cols-4 pb-10 lg:grid-cols-4 xl:grid-cols-6'>
      {
        images.length && images?.map((img, index) => {
          const { src, alt, href, title } = img;
          return <ImageContainerItem key={index} src={src} alt={alt} href={href} title={title}/>
        })
      }
    </div>
  )
}

export default ImagesContainer