import React from 'react';
import './styles.scss';

const Profile = props => (
    <div
        className="Profile"
    >
      <div className="columns">
        <div className="column">
          <h1 className="title">{ props.t('signUpProfileMessage') }</h1>
        </div>
      </div>
      <div className="columns is-9 is-offset-1 is-centered">
      </div>
    </div>
);

export default Profile;
