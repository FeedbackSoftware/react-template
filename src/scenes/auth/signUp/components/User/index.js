import React from 'react';
import './styles.css';

const User = props => (
    <div className="User">
      <div className="column">
        <h1 className="title">{ props.t('signUpUserMessage1') }</h1>&nbsp;
      </div>
      <div className="columns is-10 is-offset-1 is-centered">
      </div>
    </div>
);

export default User;
