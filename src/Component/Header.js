import logo from "../img/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="" />
        <h3>Dog Meetup</h3>
      </div>
      <div></div>
      <div></div>
      <div className="header__right">
        <ul>
          <Link to="/" className="header__links">
            <li>Home</li>
          </Link>
          <Link to="/about" className="header__links">
            <li>About</li>
          </Link>
          <Link to="/contact" className="header__links">
            <li>Contact</li>
          </Link>

          <Link to="/login" className="header__links">
            <li>Login</li>
          </Link>

          <Link to="/register" className="header__links">
            <li className="register">Register</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
