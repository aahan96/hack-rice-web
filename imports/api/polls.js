import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Polls = new Mongo.Collection('polls');

export default Polls;

Meteor.methods({
  'polls.makePoll': (pathID, recommendations) => (
    Polls.insert({ pathID, recommendations })
  ),
});
