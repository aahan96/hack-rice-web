import React, { PropTypes } from 'react';
import {
  Card,
  CardMedia,
  CardTitle,
} from 'material-ui/Card';
import { connect } from 'react-redux';

// import SendDialog from './SendDialog.jsx';

const ExistingRecs = ({ restaurants }) => {
  const rows = [];
  [].concat(...restaurants).forEach(r => (rows.push(
    <div style={{ paddingBottom: '10px' }}>
      <Card>
        <CardMedia
          overlay={
            <CardTitle
              title={r.rating}
              subtitle={r.price}
            />
          }
        >
          <img src={r.image_url} />
        </CardMedia>
        <CardTitle title={r.name} subtitle={r.location.address1} />
      </Card>
    </div>
    ))
  );
  return (
    <div>
      <div className="container">
        <h1>Restaurants</h1>
        <div
          className="container"
          style={{ maxWidth: '600px', align: 'center' }}
        >
          {rows}
        </div>
      </div>
    </div>
  );
};

ExistingRecs.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  restaurants: state.restaurants,
});

export default connect(mapStateToProps)(ExistingRecs);
