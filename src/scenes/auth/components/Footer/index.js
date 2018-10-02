import React from 'react';

const Footer = props => (
    <footer
        style={ {
          textAlign: 'center'
        } }
    >
      <div style={ { fontFamily: 'Open Sans Cond Light', padding: '10px' } }>
        {props.t('contactSupport')}
        <a href="mailto:support@freedom.technology">
              <span style={ { fontFamily: 'Open Sans Cond Bold' } }>support@freedom.technology</span>
            </a>
      </div>
    </footer>
);

export default Footer;
