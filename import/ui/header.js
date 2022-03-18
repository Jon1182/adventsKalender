import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


Template.header.events({ 
    'click .logout': function(event, template) { 
         Meteor.logout()
         Router.go('/')
    }
})
