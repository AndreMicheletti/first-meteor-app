import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
// import App from './../imports/app'
/* When new Mongo.Collection is called by client, it creates a MiniMongo */
import {Players} from './../imports/api/player'
import {Tracker} from 'meteor/tracker'

const renderPlayers = function(playerList) {
  return playerList.map(function(player) {
    return <p key={player._id}>{player.name} tem {player.score} ponto(s).</p>
  });
};

/* When DOM is ready loading, meteor.startup will run */
Meteor.startup(function() {
  Tracker.autorun(function() {
    let players = Players.find().fetch();
    let jsx = (
      <div>{renderPlayers(players)}</div>
    );
    ReactDOM.render(jsx, document.getElementById('app'))
  });
});
