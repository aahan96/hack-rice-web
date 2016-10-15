import { Meteor } from 'meteor/meteor';
import * as fs from 'fs';

Meteor.methods({
  'query.parse': (queries) => {
    const json = fs.readFileSync('../../categories.json', 'utf8');
    console.log(json);
  },
});
