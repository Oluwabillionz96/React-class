import './navbar.css'
const NavBar = () => {
  return (
      <nav>
          <div className="css-nav-container">
              <div className='logo'>LOGO</div>
              <div>
                  <ul>
                      <li><a href="">Home</a></li>
                      <li><a href="">Contact</a></li>
                      <li><a href="">About</a></li>
                  </ul>
              </div>
          </div>
    </nav>
  )
}

export default NavBar