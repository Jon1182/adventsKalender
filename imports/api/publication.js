import { Meteor } from 'meteor/meteor';
import { Calendar } from '../db/CalendarCollection';

Meteor.publish('calendar', function() {
    return Calendar.find({});
});