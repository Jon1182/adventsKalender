import { Meteor } from 'meteor/meteor';
import { Calendar } from '../db/calendarCollection';

Meteor.publish('getCalendarList', function() {  //collection wird bereit gestellt
    return Calendar.find({});
});

