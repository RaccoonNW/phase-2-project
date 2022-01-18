import {useEffect} from 'react'
import './App.css'

function Stats({lives}) {

    return (
        <div id="stats">
            <p id="lives">Lives: {lives > 0 ? lives : "GAME OVER"}</p>
        </div>
    )
}

export default Stats