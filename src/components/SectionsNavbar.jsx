import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { searchResults } from '../store/actions/resultsActions';

const SectionsNavbar = () => {

    const navigate = useNavigate();
    const query = useSelector(state => state.results.query)
    const { type } = useParams();

    const handleChangeType = (type) => {
        navigate(`/${type}/${query}`);
    }


  return (
    <div className='flex w-full lg:w-max lg:ml-[120px] items-center justify-center mt-4 lg:mt-0'>
        <li className={`${type === 'search' ? 'text-blue-500 border-b-[2px] font-bold border-blue-500' : 'text-[#0009]'} py-1 mx-3 text-sm`} onClick={() => handleChangeType('search')}>All</li>
        <li className={`${type === 'image' ? 'text-blue-500 border-b-[2px] font-bold border-blue-500' : 'text-[#0009]'} py-1 mx-3 text-sm`} onClick={() => handleChangeType('image')}>Images</li>
        <li className={`${type === 'news' ? 'text-blue-500 border-b-[2px] font-bold border-blue-500' : 'text-[#0009]'} py-1 mx-3 text-sm`} onClick={() => handleChangeType('news')}>News</li>
        <li className={`${type === 'video' ? 'text-blue-500 border-b-[2px] font-bold border-blue-500' : 'text-[#0009]'} py-1 mx-3 text-sm`} onClick={() => handleChangeType('video')}>Videos</li>
    </div>
  )
}

export default SectionsNavbar