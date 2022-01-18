import { useState, useEffect } from 'react'
import './App.css'

function Options({setDifficulty, setStarted, setSavedGame}) {

    const [mode, setMode] = useState(null)

    useEffect(() => {
        if (mode) {
    
            fetch('http://localhost:3001/puzzles')
                .then((r) => r.json())
                .then((puzzles) => {
                    setStarted(false)
                    setDifficulty(puzzles[mode])
                    setSavedGame(puzzles[mode].puzzle)
                })
        }
    }, [mode])

    function handleSetDifficulty(event) {
        setMode(event.target.value)

    }
    
        

    return (
        <div id="setup-game">
            <div id="difficulty">
                <h3>Choose Difficulty:</h3>
                <select name='difficulty' id='difficulty-select' onChange={handleSetDifficulty}>  
                    <option value=''>Select Difficulty</option>
                    <option id='diff-1' value={0}>Easy</option>
                    <option id='diff-2' value={1}>Medium</option>
                    <option id='diff-3' value={2}>Hard</option>
                </select>
            </div>
        </div>
    )

}

export default Options