import React from 'react'
import { Mic, Search } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setQuery } from '../store/actions/resultsActionsCreators';
import { useNavigate } from 'react-router-dom';
import { searchResults } from '../store/actions/resultsActions';
import InputSearchResponsive from './InputSearchResponsive'
import { setShowSearchBar } from '../store/actions/buttonsActions';

const GoogleSearch = ({ handleShowSearchBar }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useSelector(state => state.results.query);
  const showSearchBar = useSelector(state => state.buttons.showSearchBar)

  const handleSubmit = ({ key }) => {
    if(!query) return;
    if(key !== 'Enter') return

    dispatch(searchResults('search', query));
    navigate(`/search/${query}`)
  }

  const handleChange = (e) => {
    const { value } = e.target;
    dispatch(setQuery(value))    
  }
  
  return (
    <div className='flex items-center lg:ml-[20px] justify-center w-full max-w-[700px] h-max relative'>
        <Search className='!h-6 !w-6 absolute left-4 text-[#2229]'/>
            <Mic className='!h-6 !w-6 absolute right-4 text-[#2229]'/>
        <input onKeyDown={handleSubmit} value={query} onChange={handleChange} type="text" className='w-full py-1 px-12 text-base outline-none rounded-full lg:text-base lg:px-12 lg:border-[2px] lg:border-[#9999] lg:py-2 ' />
    </div>
  )
}

export default GoogleSearch