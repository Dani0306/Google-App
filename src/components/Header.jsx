import React from 'react'
import { Menu, Apps, PersonOutlineOutlined } from '@mui/icons-material'
import { Outlet } from 'react-router-dom'
import { useParams } from 'react-router-dom'


const Header = () => {
    
    const { results } = useParams()

  return (
    <div className='w-full h-screen'>
        <header className='w-full h-[6vh] flex items-center justify-between lg:justify-end'>
            <div className='w-max h-full flex items-center justify-center px-3 lg:hidden'>
                <Menu className='!w-7 !h-7 text-[#2229]'/>
                <span className={`${results && 'hidden'} ml-4 mr-2`}>All</span>
                <span className={`${results && 'hidden'} mx-2`}>Images</span>
            </div>
            <div className='w-max h-full flex items-center justify-center px-3'>
                <span className={`ml-4 mr-2 hidden lg:inline-flex`}>All</span>
                <span className='mx-2 hidden lg:inline-flex'>Images</span>
                <button className={`${results && 'hidden'}`}>
                    <Apps className='!w-7 !h-7 text-[#2229]'/>
                </button>
                <button className={`${results && 'hidden lg:inline-flex'} bg-blue-500 text-white ml-3 font-semibold py-[.4rem] px-6 b border-none rounded-lg`}>
                    Sign in
                </button>
                <button className={`${!results && 'hidden'}`}>
                    <PersonOutlineOutlined className={`!w-8 !h-8 text-[#48e] border-2 border-blue-500 rounded-full`}/>
                </button>
            </div>
        </header>
        <Outlet/>
    </div>
  )
}

export default Header