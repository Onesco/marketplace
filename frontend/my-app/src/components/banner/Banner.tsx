import './Banner.css'
import banner  from '../../images/banner-1.jpg'


export default function Banner() {
  return (
    <div className='banner-container'>
      <div className='banner'>
        <div className='banner-left-wrapper'>
          <div className='left-banner'>
            <div className='left-banner-container'>
              <p className='type-cloth'>Adult, Clothes</p>
              <h1>Fashions Fade Style Is Eternal</h1>
              <p className='banner-text'>
                Lorem, ipsum dolor sit amet consectetur adipisicinRem beatae dignissimos
                Lorem, ipsum dolor sit amet consectetur adipisicinRem beatae dignissimos
              </p>
              <div className='btn-wrapper'>
                <button className='btn btn-left'>Explore Now</button>
                <button className='btn btn-right'>Play Video</button>
              </div> 
              <div className='brand-wrapper'>
                <h2 className='brand brand-left'>Celine</h2>
                <h2 className='brand brand-right'>Prada</h2>
              </div>    
            </div> 
          </div>
        </div>
        <div className='right-banner'>
          <img className='banner-image' src={banner} alt='clothes'/>
        </div>
      </div>
    </div>
  )
}
