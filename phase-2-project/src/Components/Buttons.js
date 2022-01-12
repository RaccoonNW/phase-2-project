import './App.css'

function Buttons({theme, setTheme, generateBoard, setHidden, selectNum, clearPreviousBoard, extractSaveBoard, setLives}) {

    const buttonText = theme ? 'Light Mode' : 'Dark Mode'
    
    function toggleTheme() {
        theme === true ? setTheme(false) : setTheme(true)
        theme === true ? document.body.style = 'background: white' : document.body.style = 'background: black; color: white';
    }

    function startGame() {
        clearPreviousBoard()
        generateBoard()
        setHidden()
        selectNum()
    }

    function saveGame() {
        extractSaveBoard()
    }

    return (
        <div id="theme">
            <button id="theme-button" onClick={toggleTheme}>
                {buttonText}
            </button>
            <button id="new-game-button" onClick={startGame}>Create New Game</button>
            <button id="save-game-button" onClick={saveGame}>Save Game</button>
        </div>
    )
}

export default Buttons