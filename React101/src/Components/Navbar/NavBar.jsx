import { Link } from 'react-router-dom'
import './navbar.css'
const NavBar = () => {
  return (
    <nav>
      <div className="css-nav-container">
        <Link to="/">
          <div className="logo">LOGO</div>
        </Link>
        <div>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>

            <Link to="Contact">
              <li>Contact</li>
            </Link>
            <Link to="About">
              <li>
                <a href="">About</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar