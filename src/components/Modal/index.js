import React from 'react';
import './styles.css';

const Modal = ({ children, isActive, handleToggle }) => (
    !isActive ? null : <div className={ `modal is-active` }>
      <div
          className="modal-background"
          onClick={ () => handleToggle() }
      />
      <div
          className="modal-content"
          style={ {
            width: 'auto',
            left: 0,
            overflowY: 'scroll',
            overflowX: 'hidden'
          } }
      >
        { children }
      </div>
    </div>
);

export default Modal;
