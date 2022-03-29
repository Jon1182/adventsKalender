import './calendarOverView.html';
import { Template } from 'meteor/templating';
import {Calendar} from '../db/calendarCollection'

Template.calendarOverView.events({
    'click #newCalendar': function(){
   
        Meteor.call('calendar.create');
        

    },
    'click .deleteCalendar': function(e) {
        console.log("deleteCalendar", e.target.id);
        Meteor.call('deleteCalendar', e.target.id);
    },
})


Template.calendarOverView.onCreated(function(){
    
    Tracker.autorun(function(){
        Meteor.subscribe('getCalendarList')  //collection wird abgerufen
       
        
    })
})

Template.calendarOverView.helpers({
    calendar: function() {
      let calendar = Calendar.find({}).fetch();
  
      console.log(calendar);
      return calendar
  
    }

})

