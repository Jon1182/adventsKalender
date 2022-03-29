import {Calendar} from '../db/calendarCollection'
import './calendarEdit.html'

Template.calendarEdit.onCreated(function() { 
    // Tracker.autorun(function() { 
    //     const calendarId = this.params._id;
    //     console.log('getCalendarByID'+ calendarId)
    //     Meteor.subscribe('getCalendarByID', calendarId) 
    // }); 
    
});

Template.calendarEdit.onRendered(function() {
    let calendar = Calendar.find().fetch()
    console.log("calendar", calendar);
});

Template.calendarEdit.helpers({
    calendar: function() {
        return Calendar.find()
    }
});

Template.calendarEdit.events({
    'submit #calendarEdit'(e){
        e.preventDefault();
        
        
        const target =e.target;
        let days = [];
        
        for (i=1; i<25; i++){
            const dayName = "day"+i
            const day = {
                day: i,
                riddle: target[dayName].value,
                viewed: this.days[i-1].viewed
            }
            
            days.push(day)
            
            
        }

    
        console.table(days)
        
        Meteor.call('calendar.update', this._id, days); 


        Router.go('home');

    }
})

        
  




