import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


Template.header.onCreated(function() { 
    console.log("id", this);
});

Template.header.onRendered(function() {

    
});
Template.header.events({ 
    'click .logout': function(event, template) { 
         Meteor.logout()
         Router.go('/')
      

    },
    
    // 'click .nav-link': function(e){
    //     let id = e.target.id
    //     console.log('id'+id);
    // }
  

})
