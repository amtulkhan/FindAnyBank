import React, { useState, useEffect } from "react";
import { useLocation, useHistory, Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faTimesCircle } from '@fortawesome/free-solid-svg-icons'


function Navbar() {
  // used to display the active link
  const [activeRoute, setActiveRoute] = useState(null);
  const [drawer, setdrawer] = useState(null);
  const location = useLocation();
  const history = useHistory();
  
  
  

  useEffect(() => {
    setActiveRoute(location.pathname);
    setdrawer(document.getElementById("drawer"));
  }, [location.pathname]);

  return (
    <>
      <div className="AppBar" >
        <div className="MuiToolbar-regular MuiToolbar-gutters MuiToolbar-root">
          <div className="mobileDisplay">
            <button
              onClick={() => {
                drawer.classList.add("showDrawer");
              }}
              edge="start"
              className="MuiIconButton-colorInherit MuiIconButton-edgeStart MuiIconButton-root MuiButtonBase-root"
              color="inherit"
              aria-label="menu"
            >
              <FontAwesomeIcon icon={faEllipsisV} size="1x" />
              
            </button>
          </div>

          <h6 className="title">
            <Link to="/all-banks">
              <span style={{ color: "#ebebeb" }}>Find your bank</span>
            </Link>
          </h6>

          <div className="desktopDisplay">
            <button
              onClick={() => {
                history.push("/all-banks");
              }}
              className="MuiButtonBase-root MuiButton-root MuiButton-text"
            >
              <span className=" MuiButton-label ">
              <span className={activeRoute === "/all-banks" ? "active" : null}>
                All banks
              </span>
              </span>
             
            </button>

            <button
              onClick={() => {
                history.push("/favorites");
              }}
              className="MuiButton-text MuiButton-root MuiButtonBase-root"
            >
              <span className=" MuiButton-label">
              <span className={activeRoute === "/favorites" ? "active" : null}>
                Favourite banks
              </span>
              </span>
              
            </button>
          </div>
        
          </div>
      </div>

      <div className="drawer" id="drawer">
        <div className="closeButton">
          <button
            onClick={() => {
              drawer.classList.remove("showDrawer");
            }}
            aria-label="close drawer"
            component="span"
            className="MuiIconButton-colorInherit MuiIconButton-edgeStart MuiIconButton-root MuiButtonBase-root"
          >
              <FontAwesomeIcon icon={faTimesCircle} size="1x" />
            
          </button>
        </div>
        <hr className="MuiDivider-root" />
        <div className="drawerItems">
          <ul>
            <li>
              <Link
                to="/all-banks"
                onClick={() => {
                  drawer.classList.remove("showDrawer");
                }}
              >
                <span
                  className={activeRoute === "/all-banks" ? "active" : null}
                >
                  All banks
                </span>{" "}
              </Link>
            </li>
        <hr className="MuiDivider-root" />
            
            <li>
              <Link
                to="/favorites"
                onClick={() => {
                  drawer.classList.remove("showDrawer");
                }}
              >
                <span
                  className={activeRoute === "/favorites" ? "active" : null}
                >
                  Favourites
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
