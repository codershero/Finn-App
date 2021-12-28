import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import classes from "../../styles/Header.module.css";
import Logo from "./Logo";
import Notification from './NavIcons/Notification';
import Plus from './NavIcons/Plus';
import Message from './NavIcons/Message';
import LogingIcon from './NavIcons/LogingIcon';
const Header = () => {
  return (
    <header className={classes.HeaderTop}>
      <div className="container">
        <nav
          className={`navbar navbar-expand-lg navbar-light ${classes.nav_height}`}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <h2>
                <Logo />
              </h2>
            </a>
            <span>Mulighetenes marked</span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <Notification />
                    <span className={classes.navText}>Varslinger</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Plus />                    
                    <span className={classes.navText}>Ny annonse</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Message />
                    <span className={classes.navText}>Meldinger</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <LogingIcon />
                    <span className={classes.navText}>Logg inn</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
