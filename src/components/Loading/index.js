import React from 'react';
import './styles.scss';

const Loading = (props) => (
    <div className="loading">
      <div
          className="holder"
          onClick={ () => props.close && props.close() }
      >
        <div className="preloader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
);

export default Loading;
