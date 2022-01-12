import './App.css'
import React, {useState} from 'react'
import Board from './Board'
import NumElement from './NumElement'

function Game({generateBoard, hidden}) {

    const [selected, setSelected] = useState(null)


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
            <Board generateBoard={generateBoard}/>
            <div id="number-container" className={hidden}>
                {numArray.map((num, numId) => {
                    
                    return (
                        <NumElement
                            setSelected={setSelected}
                            selected={selected}
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