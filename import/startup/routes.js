Router.configure({
  layoutTemplate: 'main'
});


Router.onBeforeAction(function () {
  // all properties available in the route function
  // are also available here such as this.params
  $('body').addClass("d-flex h-100 text-center text-white bg-dark");

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
    this.render('home');
});

Router.route('/home', function () { 
  this.render('home');
})
