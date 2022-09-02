import './Banner.css'
import banner  from '../../images/banner-1.jpg'


export default function Banner() {
  return (
    <div className='banner'>
      <img className='banner-image' src={banner} alt='hands'/>
    </div>
  )
}
