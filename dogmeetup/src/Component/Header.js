import logo from "../img/logo.png";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";
import { logout } from "../redux/authSlice";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useState } from "react";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const auth = useSelector((state) => state.auth);
  const { userDetails } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOwnerProfile = () => {
    setAnchorEl(null);
    history.push("/profile");
  };
  const handleDogProfile = () => {
    setAnchorEl(null);
    history.push("/dogs");
  };
  const handleLogout = () => {
    dispatch(logout());
    setAnchorEl(null);
    history.push("/");
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container--left">
          <img src={logo} alt="" />
          <Link to="/" className="header__links">
            <h3>Dog Meetup</h3>
          </Link>
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
                onClick={handleClick}
                aria-controls="simple-menu"
                aria-haspopup="true"
                style={{ padding: "2px 8px" }}
              >
                <Avatar src={userDetails?.profilepic} />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleOwnerProfile}>Profile</MenuItem>
                <MenuItem onClick={handleDogProfile}>My dogs</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
              <Link to="/profile" className="header__links"></Link>
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
