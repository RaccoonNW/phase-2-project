import React, {useEffect, useState, } from 'react';
import Header from './Header';
import Game from './Game';
import Options from './Options';
import Buttons from './Buttons';
import Stats from './Stats';
import Welcome from './Welcome';
import Saves from './Saves';
import './App.css'
import '../db.json'
import {Route, Switch} from 'react-router-dom'

function App() {

  const [theme, setTheme] = useState(false)
  const [difficulty, setDifficulty] = useState()
  const [lives, setLives] = useState(3)
  const [selected, setSelected] = useState(null)
  const [started, setStarted] = useState(false)
  const [selectedTile, setSelectedTile] = useState()
  const [selectedNumber, setSelectedNumber] = useState()
  const [savedGame, setSavedGame] = useState('')
  const [temporarySaveText, setTemporarySaveText] = useState()


  function updateSavedGame() {
    if (selectedTile !== undefined) {
      const firstHalf = savedGame.substring(0, selectedTile)
      const secondHalf = savedGame.substring(selectedTile + 1)
      setSavedGame(firstHalf + selectedNumber + secondHalf)

    }

}


  function postSavedGame() {
    const savedGameData = {
      id: '',
      difficulty: difficulty.difficulty,
      puzzle: savedGame,
      solution: difficulty.solution,
      lives: lives
    }
    setTimeout(() => {
      fetch('http://localhost:3001/saves', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(savedGameData),
      })
    }, 1000)

  }

  return (
    <div>
      <Welcome/>
      <Switch>
        <Route exact path='/saves'>
          <Saves temporarySaveText={temporarySaveText}/>
        </Route>
        <Route exact path='/game'>
          <Header />
          <Options setDifficulty={setDifficulty} setStarted={setStarted} setSavedGame={setSavedGame}/>
          <Buttons
            setLives={setLives}  
            theme={theme} setTheme={setTheme} 
            setStarted={setStarted}
            savedGame={savedGame}
            setSavedGame={setSavedGame}
            updateSavedGame={updateSavedGame}
            postSavedGame={postSavedGame}
            setTemporarySaveText={setTemporarySaveText}
          />
          <Stats 
            lives={lives} 
            setLives={setLives}
          />
          <Game 
            selectedNumber={selectedNumber} 
            setSelectedNumber={setSelectedNumber}
            difficulty={difficulty}
            theme={theme}
            selected={selected}
            setSelected={setSelected}
            difficulty={difficulty}
            selectedTile={selectedTile}
            setSelectedTile={setSelectedTile}
            started={started}
            lives={lives}
            setLives={setLives}
            savedGame={savedGame}
            setSavedGame={setSavedGame}
            updateSavedGame={updateSavedGame}
          />
        </Route>
      </Switch>

    </div>
  )

}



export default App;

