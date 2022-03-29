import { Meteor } from 'meteor/meteor';
import { Calendar } from '../db/calendarCollection';



Meteor.publish('getCalendarByID', function(calendarId){
    
    return Calendar.find({_id: calendarId});
    
});

