import './navBar.css'
import { useState } from 'react'


export default function NavBar() {
 const [tuggle, setTuggle] = useState(false)
 
  return (
    <div className='navbar-wrapper'>
      <div className="navbar">
        <div className='left-nav'>
          <i>Icon</i> <span className='logo-title'>Santos Clothing</span>
        </div>
        <div className={tuggle?'right-nav display':'right-nav hidden'}>
          <div className='right-nav-item'>Home</div>
          <div className='right-nav-item'>Category</div>
          <div className='right-nav-item'>Promo</div>
          <div className='right-nav-item'>About</div>
          <button> Connect me</button>
        </div>
        <button 
          className='hambuger'
          onClick={()=>{setTuggle((prevState)=>!prevState)}}
        >
         {tuggle?"close":"open"}
        </button>
      </div>
    </div>
  )
}