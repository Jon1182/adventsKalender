import { Calendar } from "../db/calendarCollection";

Router.configure({
  layoutTemplate: 'main'
});


Router.onBeforeAction(function () {
  // all properties available in the route function
  // are also available here such as this.params

  if (!Meteor.userId()) {
    // if the user is not logged in, render the Login template
    this.render('login');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    // from running
    this.next();
  }
});



Router.route('/', function () { 
    this.render('calendarOverView');
});

Router.route('/home', function () { 
  this.render('calendarOverView');
});




Router.route('/newCalendar', function () { 
  this.render('newCalendar');
});





Router.route('/calendarView/:_id', {
  name: 'calendarView',
  layoutTemplate: 'calendarLayout',
  template: 'calendarView',
  data:function(){
    return Calendar.findOne({_id: this.params._id})
  },
  waitOn: function(){
    return Meteor.subscribe('getCalendarByID', this.params_id)
  }
});

Router.route('/calendarEdit/:_id',  {
  name: 'calendarEdit',
  template: 'calendarEdit',
  data: function() {
    return Calendar.findOne({_id: this.params._id})
  },
  waitOn: function() {
    this.render('home')
    return Meteor.subscribe('getCalendarByID', this.params._id)
  }
},)


