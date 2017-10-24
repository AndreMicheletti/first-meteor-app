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

const insertPlayer = function(e) {
  let playerName = e.target.playerName.value
  e.preventDefault() // This prevent the page refresh behaviour
  e.target.playerName.value = ''
  Players.insert({
    'name': playerName,
    'score': 0
  })
};

/* When DOM is ready loading, meteor.startup will run */
Meteor.startup(function() {
  /* Tracker autorun will run everytime Mongo gets updated */
  Tracker.autorun(function() {
    let players = Players.find().fetch();
    let jsx = (
      <div>
        <h1>Meteor App</h1>
        <div>{renderPlayers(players)}</div>
        <form onSubmit={insertPlayer}>
          <input type='text' name='playerName' placeholder='Nome do jogador...' />
          <button>Inserir</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'))
  });
});
