import React, { PropTypes } from 'react';
import {
  Card,
  CardMedia,
  CardTitle,
} from 'material-ui/Card';
import { Button, Collapse } from 'react-bootstrap';
import { connect } from 'react-redux';

import { toggleCollapse } from '../redux/actions';
import SendView from './SendView.jsx';

// import SendDialog from './SendDialog.jsx';

const RestaurantsView = ({ restaurants, expanded, handleClick }) => {
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
      <div className="restaurants">
        <div className="container">
          {rows.length > 0 ? (
            <div style={{ paddingBottom: '10px' }}>
              <h1>Restaurants</h1>
              <Button onClick={handleClick}>
                Show restaurants
              </Button>
            </div>
            ) : null}
        </div>
        <Collapse in={expanded}>
          <div
            className="container"
            style={{ maxWidth: '600px', align: 'center' }}
          >
            {rows}
          </div>
        </Collapse>
      </div>
      {rows.length > 0 ? <SendView /> : null}
    </div>
  );
};

RestaurantsView.propTypes = {
  restaurants: PropTypes.array.isRequired,
  expanded: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  restaurants: state.restaurants,
  expanded: state.expanded,
});

const mapDispatchToProps = dispatch => ({
  handleClick: () => dispatch(toggleCollapse()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsView);
