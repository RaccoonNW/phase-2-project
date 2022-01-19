import './App.css'

function Buttons({theme, setTheme, setLives, setStarted, setSavedGame, savedGame, updateSavedGame, postSavedGame, setTemporarySaveText}) {

    const buttonText = theme ? 'Light Mode' : 'Dark Mode'
    
    function toggleTheme() {
        theme === true ? setTheme(false) : setTheme(true)
        theme === true ? document.body.style = 'background: white' : document.body.style = 'background: black; color: white';

    }

    function startGame() {
        setStarted(true)
        setLives(3)
    }

    function handleSaveGame() {
        postSavedGame()
        setTemporarySaveText('This will eventually be a list of saved games to choose from')
    }

    return (
        <div id="theme">
            <button id="theme-button" onClick={toggleTheme}>
                {buttonText}
            </button>
            <button id="new-game-button" onClick={startGame}>Create New Game</button>
            <button id="save-game-button" onClick={handleSaveGame}>Save Game</button>
        </div>
    )
}

export default Buttons