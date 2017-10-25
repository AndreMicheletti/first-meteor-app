import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
// import App from './../imports/app'
/* When new Mongo.Collection is called by client, it creates a MiniMongo */
import {Players} from './../imports/api/player'
import {Tracker} from 'meteor/tracker'

// UI imports
import TitleBar from './../imports/ui/TitleBar'
import AddPlayer from './../imports/ui/AddPlayer'

const renderPlayers = function(playerList) {
  return playerList.map(function(player) {
    return (
      <p key={player._id}>
        {player.name} tem {player.score} ponto(s).
        <button onClick={() => Players.update(player._id, { '$inc': { score: -1}})}>-1</button>
        <button onClick={() => Players.update(player._id, { '$inc': { score: 1}})}>+1</button>
        <button onClick={() => Players.remove(player._id)}>X</button>
      </p>
    );
  });
};

/* When DOM is ready loading, meteor.startup will run */
Meteor.startup(function() {
  /* Tracker autorun will run everytime Mongo gets updated */
  Tracker.autorun(function() {
    let players = Players.find().fetch();
    let jsx = (
      <div>
        <TitleBar />
        <div>{renderPlayers(players)}</div>
        <AddPlayer />
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'))
  });
});
