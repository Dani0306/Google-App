import ReactPlayer from 'react-player'

const VideosContainerItem = ({ link, description, title }) => {
  return (
    <div className='w-full h-max items-center flex justify-between px-4 my-4'>
        <div className='flex items-start justify-start'>
            <div className='h-max w-max'>
                <ReactPlayer width={180} height={120} url={link} />
            </div>
        </div>
        <div className='h-full flex items-start justify-start flex-col px-4'>
            <h2 className='text-xl text-[#1119] md:text-blue-600 mb-2'>{title.length > 50 ? title.substring(0, 50) + '...': title}</h2>
            <p className='hidden lg:inline-flex'>{description.length > 150 ? description.substring(0, 150) + '...' : description}</p>
        </div>
    </div>
  )
}

export default VideosContainerItem