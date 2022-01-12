import './App.css'
import Board from './Board'

function Game({generateBoard, hidden}) {


    return (
        <div id="game">
            <Board generateBoard={generateBoard}/>
            <div id="number-container" className={hidden}>
                <p id="one">1</p>
                <p id="two">2</p>
                <p id="three">3</p>
                <p id="four">4</p>
                <p id="five">5</p>
                <p id="six">6</p>
                <p id="seven">7</p>
                <p id="eight">8</p>
                <p id="nine">9</p>
            </div>
        </div>
    )
}

export default Game