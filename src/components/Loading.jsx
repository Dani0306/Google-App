import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='w-full h-full flex items-center justify-center flex-col'>
        <img src="/google1.png" className='w-[150px] mt-[-10%] h-[150px] my-4 object-contain' alt="Google" />
        <div className='w-max h-max'>
          <TailSpin color='#48e' width={50} height={50}/>
        </div>
    </div>
  )
}

export default Loading