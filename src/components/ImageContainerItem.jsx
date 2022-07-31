import React from 'react'

const ImageContainerItem = ({ src, alt, title, href }) => {
  return (
    <div className='w-full h-[200px]'>
        <img src={src} alt={alt} className='w-full h-full object-cover'/>
    </div>
  )
}

export default ImageContainerItem