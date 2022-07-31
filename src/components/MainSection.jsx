import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setShowSearchBar } from '../store/actions/buttonsActions'
import InputSearchResponsive from './InputSearchResponsive'
import GoogleSearch from './GoogleSearch'

const MainSection = () => {

  const showSearchBar = useSelector(state => state.buttons.showSearchBar)
  const dispatch = useDispatch()

  const handleShowSearchBar = () => {
    if(typeof(window) && window.innerWidth <= 1024){
      dispatch(setShowSearchBar(true))
    }
  }

  return (
    <div className='h-[94vh] w-full flex flex-col items-center'>
        <div className='w-full h-[30%] flex items-center flex-col justify-center px-6 md:px-10'>
            <img src="/google1.png" className='w-[60%] h-[55%] lg:w-[85%] lg:h-[85%] lg:mt-[15%] object-contain' alt="" />
            <GoogleSearch handleShowSearchBar={handleShowSearchBar}/>
            {showSearchBar && <InputSearchResponsive />}          
        </div>
    </div>
  )
}

export default MainSection