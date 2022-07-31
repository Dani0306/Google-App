import React from 'react'

const SeachContainerItem = ({ link, title, description }) => {
  return (
    
      <div className='w-full h-max flex flex-col items-start justify-center px-6 my-5 max-w-full break-words'>
        <a href={link}>
          <span className="text-[#555] text-sm">{link.length > 60 ? link.substring(0, 60) + '...' : link}</span> 
          <h2 className="text-blue-600 text-xl w-max hover:border-b-[2px] border-blue-400 my-2">{window.innerWidth < 700 && title.length > 35 ? title.substring(0, 35) + '...' : title.substring(0, 70)}</h2>
          <p className="max-w-full text-start text-sm text-[#444]">{description.length > 150 ? description.substring(0, 150) + '...' : description}</p>
        </a>
      </div>
   
  )
}

export default SeachContainerItem