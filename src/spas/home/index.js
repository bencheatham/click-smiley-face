import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'
import Game from './components/Game'

import './home.font'

class HomeSPA extends Component {

  state = {
    scoreBeers: [],
    gameWon: false
  }

  handleTargetClick = () => {
    const { scoreBeers } = this.state
    const newScoreBeers = [...scoreBeers, <span className='icon icon-beer'/>]
    const newState = newScoreBeers.length === 10 ? {
        scoreBeers: newScoreBeers,
        gameWon: true
      } : {
        scoreBeers: newScoreBeers
      }
    this.setState(newState)
  }

  getWinMessage = () => {
    const group = [...Array(8)].map((sentence, idx) => (
      <span key={idx} className='win-text'>Yayyyyyyy You Win!!!    </span>
    ))

    return [...Array(20)].map((paragraph, idx) => (
      <p key={idx} className='win-paragraph'>
        {group}
      </p>
    ))
  }

  handleStartGame = () => {
    this.setState({ 
      gameWon: false,
      scoreBeers: []
    })
  }

  render(){
    const { scoreBeers, gameWon } = this.state
    return (
      <div 
        className='game-container' 
        style={{height:'100%'}}
      >
        <div 
          className={`game-instructions${gameWon ? '__game-won' : ''}`}
          onClick={gameWon ? this.handleStartGame : ''}
        >
          {gameWon ? <span className='icon icon-play'/> : ''}
        </div>
        <div className='score-board'>Score: {scoreBeers}</div>
        {!gameWon ? <Game handleTargetClick={this.handleTargetClick}/> : 
          <div className='win-message-container'>
            {this.getWinMessage()}
          </div>    
        }
     </div>
    )
  }
}

ReactDOM.render(<HomeSPA />, document.getElementById('react-spa'))