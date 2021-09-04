import logo from "../img/logo.png";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import {logout} from '../redux/authSlice'

function Header() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = ()=>{
    dispatch(logout());
    history.push("/");

  }

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container--left">
          <img src={logo} alt="" />
          <h3>Dog Meetup</h3>
        </div>
        <div className="header__container--right">
          <Link to="/" className="header__links">
            <Button>Home</Button>
          </Link>
          <Link to="/about" className="header__links">
            <Button>About</Button>
          </Link>
          <Link to="/contact" className="header__links">
            <Button>Contact</Button>
          </Link>

          {auth.userInfo ? (
            <>
            <Button
            onClick={handleLogout}
            >Logout</Button>
            <Link to="/profile" className="header__links">
              <Button style={{ padding: "2px 8px" }}
              >
                <Avatar></Avatar>
              </Button>
            </Link>
            
             </>
          ) : (
            <>
              <Link to="/login" className="header__links">
                <Button>Login</Button>
              </Link>

              <Link to="/register" className="header__links">
                <Button
                  variant="contained"
                  disableElevation
                  style={{ backgroundColor: "#5577d2", color: "#FFFFFF" }}
                >
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
