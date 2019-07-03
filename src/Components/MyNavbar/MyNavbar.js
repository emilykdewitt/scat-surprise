import firebase from 'firebase/app';
import 'firebase/auth';

import React from 'react';
import PropTypes from 'prop-types';


class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

logMeOut = (e) => {
  e.preventDefault();
  firebase.auth().signOut();
}

render() {
  const { authed } = this.props;
  return (
    <div className="MyNavbar">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <span className="navbar-brand" href="#">Scat Surprise</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>
          <form className="form-inline my-2 my-lg-0">
            {authed ? (
              <button className="btn btn-outline-light my-2 my-sm-0" onClick={this.logMeOut}>Log Out!</button>
            ) : (
              ''
            )}
          </form>
        </div>
      </nav>
    </div>
  );
}
}

export default MyNavbar;
