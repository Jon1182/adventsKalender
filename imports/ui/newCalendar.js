import {calendarCollection} from '../db/calendarCollection';
import './newCalendar.html';

Template.newCalendar.onCreated(function(){
    
    Tracker.autorun(function(){
        Meteor.subscribe(calendar)

    })
})