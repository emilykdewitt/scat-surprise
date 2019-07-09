import React from 'react';
import scatData from '../../helpers/data/scatData';

class ScatCard extends React.Component {
  render() {
    const { scat } = this.props;
    return (
      <div className="scatCard col-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{scat.sampleName}</h5>
            <p class="card-text">{scat.location}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;
