import React from 'react'
import { ArrowBack, Close } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setQuery } from '../store/actions/resultsActionsCreators' 
import { setShowSearchBar } from '../store/actions/buttonsActions'
import { searchResults } from '../store/actions/resultsActions'
import { useNavigate } from 'react-router-dom'

const InputSearchResponsive = () => {

    const query = useSelector(state => state.results.query)


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = e => {
        const { value } = e.target;

        dispatch(setQuery(value));

    }

    const handleBack = () => dispatch(setShowSearchBar(false))

    const cleanQuery = () => dispatch(setQuery(''))

    const handleSubmit = ({ key }) => {
      if(!query) return;
      if(key !== 'Enter') return;
      dispatch(setLoading(true))

      dispatch(searchResults('search', query));
      navigate(`/search/${query}`)
    }


  return (
    <div className='h-full w-full absolute top-0 left-0 z-10 bg-white flex items-start justify-start py-2'>
        <div className='flex items-center justify-center w-full relative'>
            <ArrowBack onClick={handleBack} className='!w-6 !h-6 absolute left-3 text-blue-500'/>
            {query && <Close onClick={cleanQuery} className='!w-6 !h-6 absolute right-3 text-[#2229]'/>}
            <input value={query} onChange={handleChange} onKeyDown={handleSubmit} type="text"  autoFocus className='w-full h-max text-base py-2 pr-12 pl-12 border-none outline-none bg-white' />
        </div>
    </div>
  )
}

export default InputSearchResponsive