import React from 'react'

const NewsContainerItem = ({ title, link, published }) => {
  return (
    <div className='w-full px-6 flex flex-col items-start my-5'>
        <a href={link}>
            <h2 className='text-xl text-blue-600 my-2'>{title}</h2>
        </a>
    </div>
  )
}

export default NewsContainerItem