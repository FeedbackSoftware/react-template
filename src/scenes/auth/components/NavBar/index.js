import React   from 'react';
import './styles.css';
import { IMG } from '../../../../config/constants';

const NavBar = props => (
    <div className="NavBar">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a
                className="navbar-item"
                href="../"
            >
              <img
                  src={ IMG.logo }
                  alt="Logo"
              />
            </a>
            <span
                className="navbar-burger burger"
                data-target="navbarMenu"
            >
            <span></span>
                        <span></span>
                        <span></span>
                        </span>
          </div>
          <div
              id="navbarMenu"
              className="navbar-menu"
          >
            <div className="navbar-end">
              <div className="tabs is-right">
                <ul>
                  <li className="is-active"><a>Home</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
);

export default NavBar;
