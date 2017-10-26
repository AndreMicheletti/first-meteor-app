import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'

/* When new Mongo.Collection is called by client, it creates a MiniMongo */
// import {Players} from './../imports/api/player'
import {Tracker} from 'meteor/tracker'

import App from './../imports/ui/App'

/* When DOM is ready loading, meteor.startup will run */
Meteor.startup(function() {
  /* Tracker autorun will run everytime Mongo gets updated */
  Tracker.autorun(function() {
    ReactDOM.render(<App />, document.getElementById('app'))
  });
});
