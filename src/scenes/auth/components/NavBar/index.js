import React from 'react';
import './styles.css';

const NavBar = props => (
    <div className="NavBar">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              items
            </div>
            <span
                className="navbar-burger burger"
                data-target="navbarMenu"
                onClick={ props.burgerNav }
            >
            <span />
            <span />
            <span />
          </span>
          </div>
          <div
              id="navbarMenu"
              className="navbar-menu hide-down-up"
          >
            <div className="navbar-end">
              end
            </div>
          </div>
        </div>
      </nav>
    </div>
);

export default NavBar;
