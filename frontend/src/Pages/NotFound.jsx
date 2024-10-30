import img from '../assets/404.png'
const NotFound = () => {
  return (
    <div className=' h-screen w-full flex items-center justify-center object-contain '>
      <img className='max-w-[600px] min-w-[100px] ' src={img} alt="" />
    </div>
  )
}

export default NotFound