import React from 'react';
import scatShape from '../../helpers/scatShape';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShape.scatCardShape,
  }

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
