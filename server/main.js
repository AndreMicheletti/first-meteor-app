import {Meteor} from 'meteor/meteor'
/* When new Mongo.Collection is called by server, it creates a Mongo Collection */
import {Players} from './../imports/api/player'

Meteor.startup(function () {
  // Players.insert({
  //   'name': 'Andre',
  //   'score': 20
  // });

  /* collection.find returns a cursor on the database. Use fetch to get data */
  console.log(Players.find().fetch())
});
