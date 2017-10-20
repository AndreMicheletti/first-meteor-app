import React from 'react'
import ReactDOM from 'react-dom'

let title = 'Animals'
let artist = 'Pink Floyd'

const renderPlayers = function() {
  
};

const App = () => {
  return (
    <div style={styles.container}>
      <div>
        <img style={styles.thumbimage} src='https://image.flaticon.com/teams/slug/freepik.jpg' />
      </div>
      <div style={styles.textContainer}>
        <p style={styles.albumTitle}>{title}</p>
        <p>{artist}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    'border': 1,
    'border-color': '#000',
    'flexDirection': 'column'
  },
  thumbimage: {
    'width': 50,
    'height': 50
  },
  textContainer: {
    'justifyContent': 'space-around',
    'alignItems': 'center'
  },
  albumTitle: {
    'font-size': 18
  }
}

export default App()
