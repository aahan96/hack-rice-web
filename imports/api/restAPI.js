import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.methods({
  'restAPI.getFoursquarePlaces': (query, lat, lng) => (
    HTTP.get(
      'https://api.foursquare.com/v2/venues/search?', {
        params: {
          client_id: Meteor.settings.private.foursquare.clientID,
          client_secret: Meteor.settings.private.foursquare.clientSecret,
          v: 20130815,
          ll: `${lat},${lng}`,
          query,
        },
      }
    )
  ),
  'restAPI.getFoursquarePhotos': venueID => (
    HTTP.get(
      `https://api.foursquare.com/v2/venues/${venueID}/photos`, {
        params: {
          client_id: Meteor.settings.private.foursquare.clientID,
          client_secret: Meteor.settings.private.foursquare.clientSecret,
          v: 20130815,
        },
      }
    )
  ),
  'restAPI.getGooglePlaces': (query, lat, lng) => (
    HTTP.get(
      'https://maps.googleapis.com/maps/api/place/textsearch/json?', {
        params: {
          query,
          key: Meteor.settings.public.google.apiKey,
          location: `${lat},${lng}`,
        },
      }
    )
  ),
  'restAPI.getGoogleDistance': (lat, lng, events) => ([
    events,
    HTTP.get(
      'https://maps.googleapis.com/maps/api/distancematrix/json?', {
        params: {
          origins: `${lat},${lng}`,
          destinations: events.map(e => `${e.location}|`),
          key: Meteor.settings.public.google.apiKey,
        },
      }
    ),
  ]),
  'restAPI.getGooglePhoto': photoreference => (
    HTTP.get('https://maps.googleapis.com/maps/api/place/photo?', {
      params: {
        maxwidth: 350,
        photoreference,
        key: Meteor.settings.public.google.apiKey,
      },
    })
  ),
  'restAPI.getGlassdoorRatings': function (location, company) {
    return (
      HTTP.get(
        'https://api.glassdoor.com/api/api.htm?', {
          params: {
            v: 1,
            format: 'json',
            't.p': Meteor.settings.private.glassdoor.partnerID,
            't.k': Meteor.settings.private.glassdoor.key,
            userip: this.connection.clientAddress,
            useragent: this.connection['user-agent'],
            action: 'employers',
            q: company,
          },
        }
      )
    );
  },
  'restAPI.getYelpPlaces': (name, lat, lng) => HTTP.get(
    'https://api.yelp.com/v3/businesses/search', {
      params: {
        term: name,
        latitude: lat,
        longitude: lng,
        categories: 'restaurants',
      },
      headers: {
        Authorization: `Bearer ${Meteor.settings.private.yelp.apiKey}`,
      },
    }
  ),
});
