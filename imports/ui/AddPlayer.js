import React from 'react'
import {Players} from './../api/player'

const insertPlayer = function(e) {
  let playerName = e.target.playerName.value
  e.preventDefault() // This prevent the page refresh behaviour
  e.target.playerName.value = ''
  Players.insert({
    'name': playerName,
    'score': 0
  })
};

export default class AddPlayer extends React.Component {
  render() {
    return (
      <form onSubmit={insertPlayer}>
        <input type='text' name='playerName' placeholder='Nome do jogador...' />
        <button>Inserir</button>
      </form>
    );
  }
}
