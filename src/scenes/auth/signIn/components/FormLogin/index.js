import React          from 'react';
import './styles.css';
import { WEBBASEURL } from '../../../../../config/env';
import { NavLink }    from 'react-router-dom';

const FormLogin = props => (
    <div className="FormLogin">
      <form
          action="javascript:void(0);"
          onSubmit={ props.handleSubmit }
      >
        <div className="columns is-centered">
          <div className="field animation-slide-in-left">
            <div className="control">
              <input
                  name="username"
                  className="input is-rounded"
                  type="text"
                  placeholder={props.t('formSignInEmail')}
                  value={ props.username }
                  onChange={ props.handleInputChange }
                  autoComplete="off"
                  required
              />
            </div>
          </div>
          <div className="field animation-slide-in-right">
            <div className="control">
              <input
                  name="password"
                  className="input is-rounded"
                  type="password"
                  placeholder={props.t('formSignInPassword')}
                  value={ props.password }
                  onChange={ props.handleInputChange }
                  required
              />
            </div>
          </div>
        </div>
        <div className="columns is-centered button-submit">
          <div className="field animation-slide-in-up">
            <div className="control login-submit">
              <input
                  type="submit"
                  className="is-hidden"
              />
              <a
                  type="submit"
                  className='button is-white is-rounded is-outlined'
                  onClick={ props.handleSubmit }
                  style={ { minWidth: '60%' } }
              >
                {props.t('formSignInEnter')}
              </a>
            </div>
            <br />
            <span style={ { fontFamily: 'Open Sans Cond Light' } }>{props.t('forgotPassword')}</span>
            <NavLink
                className="blue-link"
                to='/forgot-password'
                style={ { fontFamily: 'Open Sans Cond Bold' } }
            > {props.t('clickHere')}
            </NavLink>
            <br /><br />
          </div>
        </div>
      </form>
    </div>
);

export default FormLogin;
