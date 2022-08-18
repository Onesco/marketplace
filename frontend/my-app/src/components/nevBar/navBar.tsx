import './navBar.css'

export default function NavBar() {
  return (
    <div className='navbar-wrapper'>
      <div className="navbar">
      <div className='left-nav'>
        <i>Icon</i> <span className='logo-title'>Santos Clothing</span>
      </div>
      <div className='right-nav'>
        <div className='right-nav-itme'>Home</div>
        <div className='right-nav-itme'>Category</div>
        <div className='right-nav-itme'>Promo</div>
        <div className='right-nav-itme'>About</div>
        <button> Connect me</button>
      </div>
      <div className='hambuger'>Menu</div>
    </div>
    </div>
  )
}