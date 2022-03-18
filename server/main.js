import { Meteor } from 'meteor/meteor';



Meteor.startup(() => {
  // code to run on server at startup  
  
  const SEED_USERNAME = 'meteorite';
  const SEED_PASSWORD = 'password';
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,

    });
  }

  

});