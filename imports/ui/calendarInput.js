import { Calendar } from '../db/CalendarCollection'
import {ReactiveDict} from 'meteor/reactive-dict';

const IS_LOADING_STRING = "isLoading";



Template.calendarInput.onCreated(function() { 
    this.state = new ReactiveDict();
  
    const handler = Meteor.subscribe('calendar');
    Tracker.autorun(() => {
      this.state.set(IS_LOADING_STRING, !handler.ready());
    });
});


Template.calendarInput.helpers({
    Calendar: function() {
        return Calendar
    }
});
  