import React   from 'react';
import './styles.scss';
import { IMG } from '../../../../config/constants';

const NavBar = props => (
    <div className="NavBar">
      <nav className="navbar is-primary">
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
              onClick={ () => {
                document.getElementsByClassName(
                    'navbar-burger')[0].classList.toggle('is-active');
                document.getElementsByClassName(
                    'navbar-menu')[0].classList.toggle('hide-down-up');
                document.getElementsByClassName(
                    'navbar-menu')[0].classList.toggle('show-up-down');
              } }
          >
            <span></span>
                        <span></span>
                        <span></span>
                        </span>
        </div>
        <div
            className="navbar-menu hide-down-up"
        >
          <div className="navbar-end">
            <a
                href="/sign-up"
                className="navbar-item"
            >
              SignUp
            </a>
            <a
                href={ '/login' }
                className="navbar-item"
            >
              <div className="navbar-link">
                Documentation
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>
);

export default NavBar;
