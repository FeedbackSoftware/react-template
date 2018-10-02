import React from 'react';
import './styles.css';

const NavBar = props => (
    <div className="NavBar">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item">
              { props.images.map((image, index) => (
                  <img
                      className="icon-freedom"
                      key={ index }
                      src={ image }
                      alt="Icon freedom"
                  />
              )) }
              { /*<h4 style={ { fontStyle: 'italic' } }>SOCIAL TECHNOLOGY</h4>*/ }
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
              { props.options.map(option => option) }
            </div>
          </div>
        </div>
      </nav>
    </div>
);

export default NavBar;
