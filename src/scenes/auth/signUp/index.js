import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Loading }          from '../../../components';
import { authActions }      from '../../../state/ducks/auth';
import { NavBar, Footer }   from '../components';
import './styles.css';
import { ToastContainer }   from 'react-toastify';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
  
  }
  
  componentDidUpdate() {
  
  };
  
  render() {
    const { auth: { loading }, t } = this.props;
    return (
        <div className="SignUp">
          <ToastContainer />
          { loading && <Loading /> }
          <section className="hero is-info is-fullheight">
            <div className="hero-head">
              <NavBar />
            </div>
            <div className="hero-body">
              hi
            </div>
            <Footer t={ t } />
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
export default connect(mapStateToProps, { ...authActions })(SignUp);
