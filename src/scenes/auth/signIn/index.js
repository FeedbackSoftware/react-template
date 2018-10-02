import React, { Component }  from 'react';
import { connect }           from 'react-redux';
import { authActions }       from '../../../state/ducks/auth';
import { Loading } from '../../../components';
import { NavBar, Footer }    from '../components';
import './styles.css';
import { ToastContainer }    from 'react-toastify';

class SignIn extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const { auth: { loading }, t } = this.props;
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
              hi
            </div>
            <Footer t={ t }></Footer>
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
