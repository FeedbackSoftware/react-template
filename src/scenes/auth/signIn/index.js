import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { authActions }      from '../../../state/ducks/auth';
import { Loading }          from '../../../components';
import { NavBar, Footer }   from '../components';
import './styles.css';
import { ToastContainer }   from 'react-toastify';
import FormLogin            from './components/FormLogin';

class SignIn extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const { auth: { loading }, t, props } = this.props;
    return (
        <div className="SignIn">
          <ToastContainer />
          { loading && <Loading /> }
          <section className="hero is-info is-fullheight">
            <div className="hero-head">
              <NavBar />
            </div>
            <br />
            <br />
            <div className="hero-body">
              <div className="container has-text-centered">
                <div className="columns is-vcentered">
                  <div className="column is-5">
                    <figure className="image is-4by3">
                      <img
                          src="https://picsum.photos/800/600/?random"
                          alt="Description"
                      />
                    </ figure>
                  </div>
                  <div className="column is-6 is-offset-1">
                    <h1 className="title is-2">
                      The technological world
                    </h1>
                    <h2 className="subtitle is-4">
                      A world connected by internet, requires people prepared to
                      do it.
                    </h2>
                    <br />
                    <p className="has-text-centered">
                      <a className="button is-medium is-primary is-outlined">
                        Learn more
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-foot">
              <Footer />
            </div>
          </section>
        </div>
    );
  }
}

const mapStateToProps = ({ auth }) => (
    {
      auth
    }
);
export default connect(mapStateToProps, { ...authActions })(SignIn);
