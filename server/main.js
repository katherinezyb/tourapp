import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  People.remove({});  // clear the database
  People.insert({name:'Tim',birthyear:1955});
  People.insert({name:'Caitlin',birthyear:1995});

  Place.remove({});
  Place.insert({name:'Amy',place:'London',budget:2000});
  Place.insert({name:'Bob',place:'New York',budget:1000});
});
