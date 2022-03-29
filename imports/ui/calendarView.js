import './calendarView.html'
import '../style/calendar.css'
import {Calendar} from '../db/calendarCollection'

Template.calendarView.onCreated(function() { 
    console.log("calendarView created");
    let id = Router.current().params._id
    Tracker.autorun(function() { 
        Meteor.subscribe('getCalendarByID', id); 
    });
});

Template.calendarView.onRendered(function() {
    $('body').removeClass('bg-dark') 
    $('body').addClass('calendarbody')
    console.log("calendarView rendered", Calendar.find().fetch());
    // this.autorun(function(){
    //     var data = Router.current().data();
    //     computation(data);
    // });
});

Template.calendarView.events({
     'click .door': function(e){
        // e.preventDefault()
        let day = e.currentTarget.id
        let calendarId = this._id
        // if(this)
         Meteor.call('calendar.viewed.update', calendarId, day )
        
     }
    
})


//  var date = new Date();
//  var day = date.getDate();
//  for (let i = day+1; i <= 24; i++) {
//     var element = document.querySelector('.day-'+i+' input');
//    if (element != null && element != undefined) {
//        element.disabled = "disabled";
//    }
// }

