import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import scatShape from '../../helpers/scatShape';

class ScatCard extends React.Component {
  static propTypes = {
    scat: scatShape.scatCardShape,
    deleteScat: PropTypes.func.isRequired,
  }

  deleteMe = (e) => {
    e.preventDefault();
    const { scat, deleteScat } = this.props;
    deleteScat(scat.id);
  };

  render() {
    const { scat } = this.props;
    const singleLink = `/scat/${scat.id}`;
    const editLink = `/edit/${scat.id}`;
    return (
      <div className="scatCard col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{scat.sampleName}</h5>
            <Link className="btn btn-success"to={singleLink}>View</Link>
            <Link className="btn btn-primary" to={editLink}>Edit</Link>
            <button className="btn btn-danger" onClick={this.deleteMe}>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;
