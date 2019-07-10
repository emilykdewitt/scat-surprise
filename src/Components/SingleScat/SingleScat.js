import React from 'react';
import { Link } from 'react-router-dom';

import scatData from '../../helpers/data/scatData';

class SingleScat extends React.Component {
  state = {
    scat: {},
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatData.getSingleScat(scatId)
      .then(scatPromise => this.setState({ scat: scatPromise.data }))
      .catch(err => console.error('unable to get single scat', err));
  }

  deleteScat = () => {
    const scatId = this.props.match.params.id;
    scatData.deleteScat(scatId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('unable to delete'));
  }

  render() {
    const { scat } = this.state;
    const editLink = `/scat/${this.props.match.params.id}`;
    return (
      <div className="SingleScat">
        <h1> {scat.sampleName}</h1>
        <h2>Location: {scat.location}</h2>
        <h2>Color: {scat.color}</h2>
        <h2>Weight: {scat.weight}</h2>
        <h2>Animal: {scat.animal}</h2>
        <Link className="btn btn-primary" to={editLink}>Edit</Link>
        <button className="btn btn-danger" onClick={this.deleteScat}>Delete</button>
      </div>
    );
  }
}

export default SingleScat;
