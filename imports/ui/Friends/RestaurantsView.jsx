import React, { PropTypes } from 'react';
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
} from 'material-ui/Card';
import { connect } from 'react-redux';

const RestaurantsView = ({ restaurants }) => {
  const rows = [];
  restaurants.forEach(r => (rows.push(
    <Card containerStyle={{ width: '350px' }}>
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
    </Card>
    ))
  );
  return (
    <div>
      <h1>Restaurants</h1>
      {rows}
    </div>
  );
};

RestaurantsView.propTypes = {
  restaurants: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  restaurants: state.restaurants,
});

export default connect(mapStateToProps)(RestaurantsView);
