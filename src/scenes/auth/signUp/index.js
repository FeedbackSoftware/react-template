import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { FormikExample, Loading } from '../../../components';
import { authActions } from '../../../state/ducks/auth';
import { NavBar, Footer } from '../components';
import './styles.scss';
import { TOAST_CONFIG } from '../../../config/constants';

function SignUp() {
  /**
   * Constantes de estado de redux
   */
  const auth = useSelector((state) => state.auth); // Selector de estado de redux (AUTH)
  const { loading } = auth;
  /** Funcion dispatcher */
  const dispatcher = useDispatch(); // Dispatch de acciones
  /**
   * Acciones del componente
   */
  const { showMessage } = authActions; // Accion a ejecutar

  return (
    <div className='SignUp'>
      <ToastContainer />
      {loading && <Loading />}
      <section className='hero is-info is-fullheight'>
        <div className='hero-head'>
          <NavBar />
        </div>
        <br />
        <br />
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <div className='columns is-vcentered'>
              <div className='column is-5'>
                <FormikExample />
              </div>
              <div className='column is-6 is-offset-1'>
                <h1 className='title is-2'>The technological world</h1>
                <h2 className='subtitle is-4'>
                  A world connected by internet, requires people prepared to do
                  it.
                </h2>
                <br />
                <p className='has-text-centered'>
                  <button
                    className='button is-medium is-primary is-outlined'
                    onClick={() => dispatcher(showMessage('Nothing to show', TOAST_CONFIG.WARNING))}
                  >
                    Learn more
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='hero-foot'>
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default SignUp;
