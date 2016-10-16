import { Meteor } from 'meteor/meteor';

export const toggleCollapse = () => ({
  type: 'TOGGLE_COLLAPSE',
});

export const showEnd = () => ({
  type: 'SHOW_END',
});

export const addTerm = (term, index) => ({
  type: 'ADD_TERM',
  term,
  index,
});

export const getRestaurants = queries => (dispatch) => {
  navigator.geolocation.getCurrentPosition((position) => {
    for (let i = 0; i < queries.length; i += 1) {
      Meteor.call(
        'restAPI.getYelpPlaces',
        queries[i],
        position.coords.latitude,
        position.coords.longitude,
        (error, result) => {
          if (error) console.log(error);
          else {
            console.log(result);
            dispatch({
              type: 'ADD_RESTAURANTS',
              restaurants: result.data.businesses.slice(0, 3),
              index: i,
            });
          }
        }
      );
    }
  });
 /*
  navigator.geolocation.getCurrentPosition(position => (
    Meteor.call(
      'restAPI.getGooglePlaces',
      queries.join(' '),
      position.coords.latitude,
      position.coords.longitude,
      (error, result) => {
        if (error) console.log(error);
        else {
          console.log(result);
          dispatch({
            type: 'GET_RESTAURANTS',
            restaurants: result.data.results.slice(0, 5),
          });
          for (let i = 0; i < 5; i += 1) {
            dispatch({
              type: 'ADD_PHOTO',
              name: result.data.results[i].name,
              url: result.data.results[i].photos[0]
                .getUrl({ maxWidth: 35, maxHeight: 35 }),
            });
          }
        }
      }
    )
  ));

  navigator.geolocation.getCurrentPosition(position => (
    Meteor.call(
      'restAPI.getFoursquarePlaces',
      queries.join(' '),
      position.coords.latitude,
      position.coords.longitude,
      (error, result) => {
        if (error) console.log(error);
        else {
          console.log(result);
          dispatch({
            type: 'GET_RESTAURANTS',
            restaurants: result.data.response.venues.slice(0, 5),
          });
          for (let i = 0; i < 5; i += 1) {
            Meteor.call(
              'restAPI.getFoursquarePhotos',
              result.data.response.venues[i].id,
              (err, res) => {
                if (err) console.log(err);
                else if (res) {
                  console.log(res);
                  dispatch({
                    type: 'GET_PHOTOS',
                    // photos: result,
                    index: i,
                  });
                }
              }
            );
          }
        }
      }
    )
  ));
  */
};
