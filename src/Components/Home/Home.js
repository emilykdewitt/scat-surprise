import React from 'react';
import firebase from 'firebase/app';

import 'firebase/auth';

import scatData from '../../helpers/data/scatData';
import ScatCard from '../ScatCard/ScatCard';

class Home extends React.Component {
  state = {
    scats: [],
  }

  getScats = () => {
    const { uid } = firebase.auth().currentUser;
    scatData.getScats(uid)
      .then(scats => this.setState({ scats }))
      .catch(err => console.error('no scats for you dude', err));
  }

  componentDidMount() {
    this.getScats();
  }

  deleteScat = (scatId) => {
    scatData.deleteScat(scatId)
      .then(() => this.getScats())
      .catch(err => console.error('unable to delete'));
  }

  render() {
    const makeScatCards = this.state.scats.map(scat => (
      <ScatCard
        key={scat.id}
        scat={scat}
        deleteScat={this.deleteScat}
        />
    ));

    return (
      <div className="Home col">
        <h1>Home</h1>
        <div className="d-flex">
        { makeScatCards }
        </div>
      </div>
    );
  }
}

export default Home;
