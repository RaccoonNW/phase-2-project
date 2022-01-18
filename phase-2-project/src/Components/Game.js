import './App.css'
import React, {useEffect, useState} from 'react'
import Board from './Board'
import NumElement from './NumElement'

function Game({
    difficulty, 
    selectedNumber, 
    setSelectedNumber,
    selectedTile,
    setSelectedTile,
    started,
    lives,
    setLives,
    savedGame,
    setSavedGame,
    updateSavedGame
}) {


    const numArray = [
        'one', 
        'two', 
        'three', 
        'four',
        'five', 
        'six', 
        'seven',
        'eight',
        'nine',
    ]
        


    return (
        <div id="game">
            <Board 
                difficulty={difficulty}
                selectedTile={selectedTile}
                setSelectedTile={setSelectedTile}
                started={started}
                // handleClickTile={handleClickTile}
                selectedNumber={selectedNumber}
                setSelectedNumber={setSelectedNumber}
                lives={lives}
                setLives={setLives}
                savedGame={savedGame}
                setSavedGame={setSavedGame}
                updateSavedGame={updateSavedGame}
            />
            <div id="number-container" className={started ? '' : 'hidden'}>
                {numArray.map((num, numId) => {
                    return (
                        <NumElement
                            setSelectedNumber={setSelectedNumber}
                            selectedNumber={selectedNumber}
                            id={num}
                            key={numId}
                            number={numId + 1}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Game