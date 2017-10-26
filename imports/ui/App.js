import React from 'react'

import {Players} from '../api/player'

import TitleBar from './TitleBar'
import PlayerList from './PlayerList'
import AddPlayer from './AddPlayer'

export default class App extends React.Component {
  render() {
    let players = Players.find().fetch();
    return (
      <div>
        <TitleBar title='Meteor App'/>
        <PlayerList players={players} />
        <AddPlayer />
      </div>
    );
  }
}
