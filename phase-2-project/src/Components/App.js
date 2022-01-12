import React, {useState} from 'react';
import Header from './Header';
import Game from './Game';
import Options from './Options';
import Buttons from './Buttons';
import Stats from './Stats';
import './App.css'
import '../db.json'

function App() {

  const [theme, setTheme] = useState(true)
  const [difficulty, setDifficulty] = useState()
  const [lives, setLives] = useState(3)
  const [disableSelected, setDisableSelected] = useState()
  const [hidden, setHidden] = useState('hidden')
  // const [lostGame, setLostGame] = useState()

  const boardDiv = document.getElementById('board')
  const numContainer = document.getElementById('number-container')

  let selectedTile
  let selectedNumber
  let disableSelect
  let savedGameArray = []
  let savedGameString
  

  // function selectNum() {
  //   for (let i = 0; i < numContainer.children.length; i++) {
  //     numContainer.children[i].addEventListener('click', () => {
  //       if (!disableSelect) {
  //         if (numContainer.children[i].classList.contains('selected')) {
  //           numContainer.children[i].classList.remove('selected')
  //           selectedNumber = null
  //         } else {
  //           for (let i = 0; i < 9; i++) {
  //             numContainer.children[i].classList.remove('selected')
  //           }
  //           numContainer.children[i].classList.add('selected')
  //           selectedNumber = numContainer.children[i]
  //           updateMove()
  //         }
  //       }
  //     })
  //   }
  // }





  function generateBoard() {
    clearPreviousBoard()

    let idCount = 0
    for (let i = 0; i < 81; i++) {
        let tile = document.createElement('p')
        if (difficulty.puzzle.charAt(i) !== "-") {
            tile.textContent = difficulty.puzzle.charAt(i)
        } else {
            tile.addEventListener('click', () => {
              if (!disableSelect) {
                if (tile.classList.contains('selected')) {
                  tile.classList.remove('selected')
                  selectedTile = null
                } else {
                  for (let i = 0; i < 81; i++) {
                    qsa(".tile")[i].classList.remove('selected')
                  }
                  tile.classList.add('selected')
                  selectedTile = tile
                  updateMove()
                }
              }
            })
        }
        tile.id = idCount
        idCount ++
        tile.classList.add('tile')
        if ((tile.id > 17 && tile.id < 27) || (tile.id > 44 && tile.id < 54)) {
            tile.classList.add('bottomBorder')
        }
        if ((tile.id + 1) % 9 === 3 || (tile.id + 1) % 9 === 6) {
            tile.classList.add('rightBorder')
        }
        boardDiv.appendChild(tile)
        
    }
}

  function updateMove() {
    if (selectedTile && selectedNumber) {
      selectedTile.textContent = selectedNumber.textContent
      if (checkCorrect(selectedTile)) {
        selectedTile.classList.remove('selected')
        selectedNumber.classList.remove('selected')
        selectedNumber = null
        selectedTile = null
      } else {
        disableSelect = true
        selectedTile.classList.add('incorrect')
        selectedTile.classList.remove('selected')
        selectedNumber.classList.remove('selected')
        setTimeout(() => {
          if (selectedTile.classList.contains('incorrect')) {
          selectedTile.classList.remove('incorrect')
          selectedTile.textContent = ""
          setDisableSelected(true)
          selectedNumber = null
          selectedTile = null
          } else {
            selectedTile.classList.add('selected')
          }
        }, 1000)
        disableSelect = false
        setDisableSelected(false)
      }
      
    }
  }




  function checkCorrect(tile) {
    if (difficulty.solution.charAt(tile.id) === tile.textContent) return true
    else return false
  }

  function clearPreviousBoard() {
    let tiles = document.querySelectorAll('.tile')
    for (let i = 0; i < tiles.length; i ++ ) {
        tiles[i].remove()
    }

    for (let i = 0; i < numContainer.children.length; i++) {
        numContainer.children[i].classList.remove('selected')
    }
    
  }
  


  function qsa(selector) {
    return document.querySelectorAll(selector)
  }

  function extractSaveBoard() {
    let saveBoard = qsa('.tile')

    for (let i = 0; i < 81; i++) {
      savedGameArray.push(saveBoard[i].textContent)
    }
    let newSavedGameArray = [...savedGameArray]
    for (let i = 0; i < 81; i++) {
      if (newSavedGameArray[i] === '') {
        newSavedGameArray[i] = '-'
      }
    }
    savedGameString = newSavedGameArray.join("")
    const gameData = {
      id: '',
      difficulty: difficulty.difficulty,
      puzzle: savedGameString,
      solution: difficulty.solution,
      lives: lives
    }
    setTimeout(() => {
      fetch('http://localhost:3001/saves', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(gameData),
      })
    }, 1000)
  }
  
  return (
    <div>
      <Header/>
      <Options setDifficulty={setDifficulty}/>
      <Buttons
        disableSelect={disableSelect}
        setLives={setLives} 
        extractSaveBoard={extractSaveBoard} 
        clearPreviousBoard={clearPreviousBoard} 
        generateBoard={generateBoard} 
        theme={theme} setTheme={setTheme} 
        setHidden={setHidden} 
        selectNum={selectNum}
      />
      <Stats 
        lives={lives} 
        setLives={setLives} 
        disableSelected={disableSelected} 
        clearPreviousBoard={clearPreviousBoard}
      />
      <Game 
        generateBoard={generateBoard} 
        difficulty={difficulty} 
        hidden={hidden} 
        theme={theme}
      />
    </div>
  )

}


export default App;

