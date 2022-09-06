import './navBar.css'
import { useState } from 'react'


const style ={
 fill:"black"
} as React.CSSProperties

const CloseIcon = ()=>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" style={style}>
      <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031
        L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 
        3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z">
      </path>
    </svg>
  )
}

const OpenIcon = ()=>{
  return(
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 24 24" style={style}>
      <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 
      3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1
      0 27 21 L 3 21 z">
      </path>
    </svg>
  )
}


export default function NavBar() {
 const [tuggle, setTuggle] = useState(false)
 
  return (
    <div className='navbar-wrapper'>
      <div className="navbar">
        <div className='left-nav'>
         <span className='logo-title'>Sanshop</span>
        </div>
        <div className={tuggle?'right-nav display':'right-nav hidden'}>
          <div className='right-nav-item'>Home</div>
          <div className='right-nav-item'>Category</div>
          <div className='right-nav-item'>Promo</div>
          <div className='right-nav-item'>About</div>
          <button>Sign Up</button>
        </div>
        <div className='hambuger' onClick={()=>{setTuggle((prevState)=>!prevState)}}>
         {tuggle?<CloseIcon/>:<OpenIcon/>}
        </div>
        
      </div>
    </div>
  )
}