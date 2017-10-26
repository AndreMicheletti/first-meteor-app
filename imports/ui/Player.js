import React from 'react'
import {Players} from '../api/player'

export default class Player extends React.Component {
  render() {
    return (
      <p>
        {this.props.player.name} tem {this.props.player.score} ponto(s).
        <button onClick={() => Players.update(this.props.player._id, { '$inc': { score: -1}})}>-1</button>
        <button onClick={() => Players.update(this.props.player._id, { '$inc': { score: 1}})}>+1</button>
        <button onClick={() => Players.remove(this.props.player._id)}>X</button>
      </p>
    );
  }
}
