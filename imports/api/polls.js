import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Polls = new Mongo.Collection('polls');

Meteor.methods({
  'polls.makePoll': (pathID, recommendations) => (
    Polls.insert({ pathID, recommendations })
  ),
});
