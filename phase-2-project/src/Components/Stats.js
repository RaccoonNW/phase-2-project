import { useEffect } from 'react'
import './App.css'

function Stats({lives, setLives, disableSelected, setLostGame}) {

    useEffect(() => {
        disableSelected ? setLives(lives - 1) : setLives(lives)
    }, [disableSelected])

    useEffect(() => {
        if (lives === 0) setLostGame(true)
    })



    return (
        <div id="stats">
            <p id="lives">Lives: {lives > 0 ? lives : "GAME OVER"}</p>
        </div>
    )
}

export default Stats